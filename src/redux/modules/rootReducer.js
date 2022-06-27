import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import raffleReducer from "./raffle/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  raffle: raffleReducer,
});

export default rootReducer;
