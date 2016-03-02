import { addClass, addId, div, i, nav, span } from '../builders';

export default function navbar() {
  const navLeft = addClass(div(), 'navbar-left');

  const cartIcon = addId(addClass(i(), 'fa', 'fa-shopping-cart'), 'cart-icon');
  const cartItems = addClass(span(), 'cart-items');
  const navbarItem = addClass(div(cartIcon, cartItems), 'navbar-item');
  const navRight = addClass(div(navbarItem), 'navbar-right', 'cart');

  return addClass(nav(navLeft, navRight), 'navbar');
}
