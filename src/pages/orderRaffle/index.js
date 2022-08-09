import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Col, Radio, Modal, Button } from "antd";
import { Form } from "formik-antd";
import { Input } from "../../components";

import { loadRaffleRequest } from "../../redux/modules/raffle/actions";
import LoadingIcon from "../../components/loadingIcon";

import { createOrderRequest } from "../../redux/modules/order/actions";

import {
  Container,
  Img,
  Carousel,
  Description,
  Quotas,
  QuotasFilterContainer,
  Quota,
  QuotasContainer,
  QuotaPrice,
} from "./style";

export default function OrderRaffle({ match }) {
  const dispatch = useDispatch();
  const { raffle, loading } = useSelector((store) => store.raffle);
  const [quotaFilter, setQuotaFilter] = useState(0);
  const [quotaList, setQuotaList] = useState([]);
  const [selectedQuotaQuantity, setSelectedQuotaQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const { id } = match.params;

    dispatch(loadRaffleRequest(id));
  }, [match, dispatch]);

  useEffect(() => {
    if (raffle && raffle.quotas) {
      setQuotaList(
        raffle.quotas.map((quota) => ({ ...quota, selected: false }))
      );
    }
  }, [raffle]);

  useEffect(() => {
    const selectedQuotasQuantity = getSelectedQuotas().length;
    setSelectedQuotaQuantity(selectedQuotasQuantity);
    setTotalPrice(selectedQuotaQuantity * raffle.quotaPrice);
  }, [quotaList, selectedQuotaQuantity, raffle.quotaPrice, getSelectedQuotas]);

  const onQuotaFilterChange = (e) => {
    setQuotaFilter(e.target.value);
  };

  function addQuotaToCart(quota) {
    if (!quota.order) {
      const updatedQuotaList = [...quotaList];
      const selectedQuota = updatedQuotaList.find(
        (q) => quota.number === q.number
      );
      selectedQuota.selected = !selectedQuota.selected;
      setQuotaList(updatedQuotaList);
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
    //setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  function getSelectedQuotas() {
    return quotaList.filter((q) => q.selected);
  }

  const formRef = useRef();

  function onSubmit(data) {
    const { id: raffleId } = match.params;

    const orderRequest = {
      ...data,
      raffleId,
      quotas: getSelectedQuotas().map((q) => q.number),
    };
    dispatch(
      createOrderRequest(orderRequest, () => {
        setIsModalVisible(false);
        setQuotaList(
          quotaList
            .map((q) => (q.selected ? { ...q, order: data } : q))
            .map((q) => ({ ...q, selected: false }))
        );
      })
    );
  }

  return loading ? (
    <LoadingIcon />
  ) : (
    <Container>
      <Col xs={24}>
        <h1>Rifa-se: {raffle.title}</h1>
        <Carousel autoplay>
          {raffle.firstImage && (
            <Img src={raffle.firstImage.url} alt={raffle.title} />
          )}
          {raffle.secondImage && (
            <Img src={raffle.secondImage.url} alt={raffle.title} />
          )}
          {raffle.thirdImage && (
            <Img src={raffle.thirdImage.url} alt={raffle.title} />
          )}
        </Carousel>
        {raffle.description && <Description>{raffle.description}</Description>}
        <QuotaPrice>Preço por quota: ${raffle.quotaPrice}</QuotaPrice>
      </Col>
      <Quotas>
        <QuotasFilterContainer>
          <label>Filtrar quotas: </label>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            onChange={onQuotaFilterChange}
            value={quotaFilter}
          >
            <Radio value={0}>Mostrar tudo</Radio>
            <Radio value={1}>Apenas disponíveis</Radio>
            <Radio value={2}>Apenas indisponíveis</Radio>
          </Radio.Group>
        </QuotasFilterContainer>
        {quotaList && (
          <QuotasContainer>
            {quotaList
              .filter((quota) => {
                switch (quotaFilter) {
                  case 1:
                    return !quota.order;
                  case 2:
                    return !!quota.order;
                  default:
                    return true;
                }
              })
              .map((quota) => (
                <Quota
                  available={!quota.order}
                  selected={quota.selected}
                  key={quota.number}
                  onClick={() => addQuotaToCart(quota)}
                >
                  {quota.number}
                </Quota>
              ))}
          </QuotasContainer>
        )}
      </Quotas>
      <Button
        disabled={!quotaList.find((quota) => quota.selected)}
        type="primary"
        block
        onClick={() => showModal()}
      >
        Comprar quotas selecionadas
      </Button>

      <Modal
        title="Comprar quotas selecionadas"
        visible={isModalVisible}
        okText="Comprar"
        cancelText="Cancelar"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>Preço por cota: ${raffle.quotaPrice}</div>
        <div>Quantidade de cotas selecionadas: {selectedQuotaQuantity}</div>
        <div>Total: ${totalPrice}</div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            quotas: [],
          }}
          //validationSchema={raffleValidationSchema}
          innerRef={formRef}
          onSubmit={onSubmit}
          render={() => (
            <Form>
              <Input name="name" placeholder="Nome" label="Nome" />
              <Input name="phone" placeholder="Telefone" label="Telefone" />
              <Input name="email" placeholder="e-mail" label="e-mail" />
            </Form>
          )}
        />
      </Modal>
    </Container>
  );
}
