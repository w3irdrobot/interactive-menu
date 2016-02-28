import { $ } from './helpers';

export default function (store) {
  $('#cart-icon').on('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });

  $('#close').on('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });
}
