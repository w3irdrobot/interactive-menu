import { addClass, addId, button, div, h1, i, p, section, text, ul } from '../builders';
import { $ } from '../helpers';
import modalItem from './modalItem';

export default function modal(store, items = []) {
  const close = addId(addClass(i(), 'fa', 'fa-times', 'close'), 'close');
  const title = addClass(h1(text('Cart')), 'title');

  let cart;
  if (items.length === 0) {
    cart = p(text('Your cart is empty.'));
  } else {
    const cartItems = items.map(modalItem);
    cart = addClass(ul(...cartItems), 'menu');
  }

  const checkoutButton = addClass(button(text('Checkout')), 'button', 'is-fullwidth');

  const modalContainer = addClass(div(close, title, cart, checkoutButton), 'modal-container');

  const modalEle = addId(addClass(section(modalContainer), 'modal'), 'modal');

  store.on('TOGGLE_SHOW_CART', ({ cartVisible }) => {
    const ele = $('#modal');
    if (cartVisible) {
      ele.classList.add('show');
    } else {
      ele.classList.remove('show');
    }
  });

  return modalEle;
}
