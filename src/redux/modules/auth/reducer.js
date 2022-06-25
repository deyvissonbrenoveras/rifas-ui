import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  token: "",
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "AUTH/LOGON_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case "AUTH/LOGON_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.token = action.payload;
      });
    case "AUTH/LOGON_FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
