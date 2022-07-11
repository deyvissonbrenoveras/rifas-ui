import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { message } from "antd";
import {
  createRaffleSuccess,
  raffleFailed,
  loadAllRafflesSuccess,
  loadRaffledRequest,
} from "./actions";

function* createRaffle({ payload }) {
  try {
    const { raffle } = payload;
    const response = yield call(api.post, "raffles", raffle);
    yield put(createRaffleSuccess(response.data));
    message.success("A rifa foi criada com sucesso!");
  } catch (err) {
    yield put(raffleFailed());
    message.error(
      "Erro ao criar a rifa, por favor entre em contato com nossa equipe"
    );
  }
}

function* loadRaffles() {
  try {
    const response = yield call(api.get, "raffles");
    yield put(loadAllRafflesSuccess(response.data));
  } catch (err) {
    yield put(raffleFailed());
    message.error(
      "Erro ao carregar as rifas, por favor entre em contato com nossa equipe"
    );
  }
}

function* loadRaffle({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `raffles/${id}`);
    yield put(loadRaffledRequest(response.data));
  } catch (err) {
    yield put(raffleFailed());
    message.error(
      "Erro ao carregar as rifa, por favor entre em contato com nossa equipe"
    );
  }
}

export default all([
  takeLatest("RAFFLE/CREATE_REQUEST", createRaffle),
  takeLatest("RAFFLE/LOAD_ALL_REQUEST", loadRaffles),
  takeLatest("RAFFLE/LOAD_RAFFLE_REQUEST", loadRaffle),
]);
