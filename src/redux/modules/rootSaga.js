import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import raffle from "./raffle/sagas";

export default function* rootSaga() {
  return yield all([auth, raffle]);
}
