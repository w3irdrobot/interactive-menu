import { addClass, addId, button, div, h1, i, p, section, text, ul } from '../builders';
import { $ } from '../helpers';
import modalItem from './modalItem';

export default function modal(store) {
  const close = addId(addClass(i(), 'fa', 'fa-times', 'close'), 'close');
  const title = addClass(h1(text('Cart')), 'title');

  const cartContainer = addId(div(p(text('Your cart is empty.'))), 'cart-items');

  const checkoutButton = addClass(button(text('Checkout')), 'button', 'is-fullwidth');

  const modalContainer = addClass(div(close, title, cartContainer, checkoutButton), 'modal-container');

  const modalEle = addId(addClass(section(modalContainer), 'modal'), 'modal');

  store.on('TOGGLE_SHOW_CART', ({ cartVisible }) => {
    const ele = $('#modal');
    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });

  store.on('ITEM_ADDED', ({ items, cart }) => {
    const cartArray = [...cart];
    const cartItems = cartArray.map(itemId => modalItem(items[itemId]));
    const cartList = addClass(ul(...cartItems), 'menu');
    $('#cart-items').children(cartList);
  });

  return modalEle;
}
