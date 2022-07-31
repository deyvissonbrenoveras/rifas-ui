import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { message } from "antd";
import { createUserSuccess, userFailed } from "./actions";

function* createUser({ payload }) {
  try {
    const { user } = payload;
    const response = yield call(api.post, "users", user);
    yield put(createUserSuccess(response.data));
    message.success("O usuário foi criado com sucesso!");
  } catch (err) {
    yield put(userFailed());
    message.error(
      err.response.data
        ? err.response.data.message
        : "Erro ao criar o usuário, por favor entre em contato com nossa equipe"
    );
  }
}

export default all([takeLatest("USER/CREATE_REQUEST", createUser)]);
