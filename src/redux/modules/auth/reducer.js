import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  signed: false,
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
        draft.token = action.payload;
        draft.loading = false;
        draft.signed = true;
      });
    case "AUTH/LOGON_FAILED":
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case "AUTH/LOGOUT":
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
