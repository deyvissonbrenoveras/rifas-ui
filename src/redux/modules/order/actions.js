export function createOrderRequest(order, successCallback) {
  return {
    type: "ORDER/CREATE_REQUEST",
    payload: { order, successCallback },
  };
}

export function createOrderSuccess(order) {
  return {
    type: "ORDER/CREATE_SUCCESS",
    payload: { order },
  };
}

export function orderFailed() {
  return {
    type: "ORDER/FAILED",
  };
}
