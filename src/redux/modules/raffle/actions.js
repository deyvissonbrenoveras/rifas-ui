export function createRaffleRequest(raffle) {
  return {
    type: "RAFFLE/CREATE_REQUEST",
    payload: { raffle },
  };
}

export function createRaffleSuccess(raffle) {
  return {
    type: "RAFFLE/CREATE_SUCCESS",
    payload: { raffle },
  };
}

export function loadAllRafflesRequest() {
  return {
    type: "RAFFLE/LOAD_ALL_REQUEST",
  };
}

export function loadRaffledRequest(id) {
  return {
    type: "RAFFLE/LOAD_RAFFLE_REQUEST",
    payload: { id },
  };
}

export function loadAllRafflesSuccess(raffles) {
  return {
    type: "RAFFLE/LOAD_ALL_SUCCESS",
    payload: { raffles },
  };
}

export function raffleFailed() {
  return {
    type: "RAFFLE/FAILED",
  };
}
