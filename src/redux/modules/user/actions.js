export function createUserRequest(user) {
  return {
    type: "USER/CREATE_REQUEST",
    payload: { user },
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
