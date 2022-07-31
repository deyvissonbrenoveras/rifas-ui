import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  order: {},
};

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
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
