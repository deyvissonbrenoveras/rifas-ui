import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import rootSaga from "./modules/rootSaga";
import rootReducer from "./modules/rootReducer";
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
