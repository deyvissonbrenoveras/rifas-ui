export function logonRequest(email, password) {
  return {
    type: "AUTH/LOGON_REQUEST",
    payload: { email, password },
  };
}

export function logonSuccess(token) {
  return {
    type: "AUTH/LOGON_SUCCESS",
    payload: token,
  };
}
export function logonFailed() {
  return {
    type: "AUTH/LOGON_FAILED",
  };
}
