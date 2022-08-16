import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { message } from "antd";
import {
  createOrderSuccess,
  orderFailed,
  loadOrdersByRaffleIdSuccess,
} from "./actions";

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
function* loadOrdersByRaffleId({ payload }) {
  try {
    const { raffleId } = payload;
    const response = yield call(api.get, `raffles/${raffleId}/orders`);
    yield put(loadOrdersByRaffleIdSuccess(response.data));
  } catch (err) {
    yield put(orderFailed());
    message.error(
      "Erro ao obter pedidos, por favor entre em contato com nossa equipe"
    );
  }
}
export default all([
  takeLatest("ORDER/CREATE_REQUEST", createOrder),
  takeLatest("ORDER/LOAD_BY_RAFFLE_ID_REQUEST", loadOrdersByRaffleId),
]);
