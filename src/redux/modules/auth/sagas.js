import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { logonSuccess, logonFailed } from "./actions";

function* logonRequest({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, "auth", { email, password });
    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(logonSuccess(token));
    //history.push('/dashboard');
  } catch (err) {
    yield put(logonFailed());
    // toast.error(
    //   "Erro ao fazer login, por favor entre em contato com nossa equipe"
    // );
  }
}

export default all([takeLatest("AUTH/LOGON_REQUEST", logonRequest)]);
