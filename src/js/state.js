const defaultState = {
  items: {},
  cart: (new Set()),
  cartVisible: false,
};

export function createStore(reducer) {
  const listeners = {};
  let state = Object.assign({}, defaultState);

  function on(event, cb) {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(cb);
  }

  function trigger(event, data = {}) {
    state = reducer(state, event, data);

    if (listeners[event]) {
      listeners[event].forEach(cb => {
        cb(state);
      });
    }
  }

  return {
    on,
    trigger,
  };
}
