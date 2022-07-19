export function createOrderRequest(order) {
  return {
    type: "ORDER/CREATE_REQUEST",
    payload: { order },
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
