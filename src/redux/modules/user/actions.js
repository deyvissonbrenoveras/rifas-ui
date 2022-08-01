export function createUserRequest(user, successCallback) {
  return {
    type: "USER/CREATE_REQUEST",
    payload: { user },
    successCallback,
  };
}

export function createUserSuccess(user) {
  return {
    type: "USER/CREATE_SUCCESS",
    payload: { user },
  };
}

export function userFailed() {
  return {
    type: "USER/FAILED",
  };
}
