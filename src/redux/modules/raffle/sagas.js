import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { toast } from "react-toastify";
import history from "../../../services/history";
import { createRaffleSuccess, raffleFailed } from "./actions";

function* createRaffle({ payload }) {
  try {
    const { raffle } = payload;
    const response = yield call(api.post, "raffles", raffle);
    yield put(createRaffleSuccess(response.data));
    toast.success("A rifa foi criada com sucesso!");
  } catch (err) {
    yield put(raffleFailed());
    toast.error(
      "Erro ao criar a rifa, por favor entre em contato com nossa equipe"
    );
  }
}

export default all([takeLatest("RAFFLE/CREATE_REQUEST", createRaffle)]);
