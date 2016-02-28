import { $ } from './helpers';

export default function (store) {
  $('#cart-icon').on('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });

  $('#close').on('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });

  $('.add-to-cart').on('click', e => {
    let parent = e.currentTarget.parentElement;

    while (parent && !parent.dataset.key) {
      parent = parent.parentElement;
    }

    const key = parseInt(parent.dataset.key, 10);
    store.trigger('ITEM_ADDED', { item: key });
  });
}
