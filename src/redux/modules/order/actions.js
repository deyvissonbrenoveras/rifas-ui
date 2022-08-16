export function loadOrdersByRaffleIdRequest(raffleId) {
  return {
    type: "ORDER/LOAD_BY_RAFFLE_ID_REQUEST",
    payload: { raffleId },
  };
}
export function loadOrdersByRaffleIdSuccess(orders) {
  return {
    type: "ORDER/LOAD_BY_RAFFLE_ID_SUCCESS",
    payload: { orders },
  };
}
export function createOrderRequest(order, successCallback) {
  return {
    type: "ORDER/CREATE_REQUEST",
    payload: { order },
    successCallback,
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
