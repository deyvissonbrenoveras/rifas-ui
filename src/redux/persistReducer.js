import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default function persistedReducer(reducers) {
  const persisted = persistReducer(
    {
      key: "rifas",
      storage,
      whitelist: ["auth"],
    },
    reducers
  );
  return persisted;
}
