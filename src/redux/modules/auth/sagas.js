import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { message } from "antd";
import history from "../../../services/history";

import { logonSuccess, logonFailed, logOut } from "./actions";

function* logonRequest({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, "auth", { email, password });
    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(logonSuccess(token));
    history.push("/create-raffle");
  } catch (err) {
    yield put(logonFailed());
    message.error(
      "Erro ao fazer login, por favor entre em contato com nossa equipe"
    );
  }
}

export function* setToken({ payload }) {
  if (!payload) {
    yield put(logOut());
    return;
  }
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    yield put(logOut());
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("AUTH/LOGON_REQUEST", logonRequest),
]);
