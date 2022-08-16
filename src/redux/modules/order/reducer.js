import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  order: {},
  orders: [],
};

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ORDER/LOAD_BY_RAFFLE_ID_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "ORDER/LOAD_BY_RAFFLE_ID_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.orders = action.payload.orders;
      });
    case "ORDER/CREATE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "ORDER/CREATE_SUCCESS":
      return produce(state, (draft) => {
        draft.order = action.payload.order;
        draft.loading = false;
      });
    case "ORDER/FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
