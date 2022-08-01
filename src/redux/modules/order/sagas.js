import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { message } from "antd";
import { createOrderSuccess, orderFailed } from "./actions";

function* createOrder({ payload, successCallback }) {
  try {
    const { order } = payload;
    const response = yield call(api.post, "orders", order);
    yield put(createOrderSuccess(response.data));
    message.success("Pedido realizado com sucesso!");
    successCallback();
  } catch (err) {
    yield put(orderFailed());
    message.error(
      "Erro ao criar pedido, por favor entre em contato com nossa equipe"
    );
  }
}
export default all([takeLatest("ORDER/CREATE_REQUEST", createOrder)]);
