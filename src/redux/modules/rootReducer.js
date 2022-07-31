import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import raffleReducer from "./raffle/reducer";
import orderReducer from "./order/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  raffle: raffleReducer,
  order: orderReducer,
  user: userReducer,
});

export default rootReducer;
