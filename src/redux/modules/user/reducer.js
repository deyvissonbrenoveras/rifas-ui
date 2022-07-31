import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  user: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER/CREATE_REQUEST":
      return produce(state, (draft) => {
        console.log("passou");
        draft.loading = true;
      });
    case "USER/CREATE_SUCCESS":
      return produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.loading = false;
      });
    case "USER/FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
