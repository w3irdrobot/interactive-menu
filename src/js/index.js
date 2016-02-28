import app from './components/app';
import { createStore } from './state';
import setupListeners from './setup_listeners';

function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items,
      });
    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: state.cart.concat(data.item),
      });
    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible,
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

fetch('food.json')
  .then(res => res.json())
  .then(resBody => {
    const body = document.querySelector('body');
    body.insertBefore(app(store), body.childNodes[0]);
    setupListeners(store);
    store.trigger('SET_ITEMS', { items: resBody });
  });
