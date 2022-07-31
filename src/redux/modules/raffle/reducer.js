import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  raffle: {},
  raffles: [],
};

export default function raffleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "RAFFLE/CREATE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "RAFFLE/CREATE_SUCCESS":
      return produce(state, (draft) => {
        draft.raffle = action.payload.raffle;
        draft.loading = false;
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
        draft.raffle = action.payload.raffle;
        draft.loading = false;
      });
    case "RAFFLE/LOAD_ALL_SUCCESS":
      return produce(state, (draft) => {
        draft.raffles = action.payload.raffles;
        draft.loading = false;
      });
    case "RAFFLE/UPDATE_RAFFLE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "RAFFLE/UPDATE_RAFFLE_SUCCESS":
      return produce(state, (draft) => {
        draft.raffle = action.payload.raffle;
        draft.loading = false;
      });
    case "RAFFLE/FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
