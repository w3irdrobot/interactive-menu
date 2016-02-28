import { $ } from './helpers';

export default function (store) {
  $('#cart-icon').addEventListener('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });

  $('#close').addEventListener('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });
}
