import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import raffle from "./raffle/sagas";
import order from "./order/sagas";
import user from "./user/sagas";

export default function* rootSaga() {
  return yield all([auth, raffle, order, user]);
}
