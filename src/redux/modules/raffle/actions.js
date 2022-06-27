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

export function raffleFailed() {
  return {
    type: "RAFFLE/FAILED",
  };
}
