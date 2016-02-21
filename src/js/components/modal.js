import { addClass, button, div, h1, i, section, text, ul } from '../builders';
import modalItem from './modalItem';

export default function modal(items = []) {
  const close = addClass(i(), 'fa', 'fa-times', 'close');
  const title = addClass(h1(text('Cart')), 'title');

  let cart;
  if (items.length === 0) {
    cart = text('Your cart is empty.');
  } else {
    const cartItems = items.map(modalItem);
    cart = addClass(ul(...cartItems), 'menu');
  }

  const checkoutButton = addClass(button(text('Checkout')), 'button', 'is-fullwidth');

  const modalContainer = addClass(div(close, title, cart, checkoutButton), 'modal-container');

  return addClass(section(modalContainer), 'modal');
}
