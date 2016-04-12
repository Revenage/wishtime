export function increaseCounter() {
  return {
    type: 'INCREASE_COUNTER'
  };
}

export function decreaseCounter() {
  return {
    type: 'DECREASE_COUNTER'
  };
}

export function resetCounter() {
  return {
    type: 'RESET_COUNTER'
  };
}