import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  raffle: {},
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "RAFFLE/CREATE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "RAFFLE/CREATE_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.raffle = action.payload.raffle;
      });
    case "RAFFLE/FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
