import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import raffleReducer from "./raffle/reducer";
import orderReducer from "./order/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  raffle: raffleReducer,
  order: orderReducer,
});

export default rootReducer;
