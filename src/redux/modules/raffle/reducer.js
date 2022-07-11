import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  raffle: {},
  raffles: [],
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
    case "RAFFLE/LOAD_ALL_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "RAFFLE/LOAD_RAFFLE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "RAFFLE/LOAD_RAFFLE_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.raffle = action.payload.raffle;
      });
    case "RAFFLE/LOAD_ALL_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.raffles = action.payload.raffles;
      });
    case "RAFFLE/FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
