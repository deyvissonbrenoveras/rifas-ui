import { legacy_createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import rootSaga from "./modules/rootSaga";
import rootReducer from "./modules/rootReducer";

import persistedReducers from "./persistReducer";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
