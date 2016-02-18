import { addClass, div, i, img, nav, span } from '../builders';

const logo = addClass(img('static/fancybear_white.png'), 'logo');
const navLeft = addClass(div(logo), 'navbar-left');

const cartIcon = addClass(i(), 'fa', 'fa-shopping-cart');
const cartItems = addClass(span(), 'cart-items');
const navbarItem = addClass(div(cartIcon, cartItems), 'navbar-item');
const navRight = addClass(div(navbarItem), 'navbar-right', 'cart');

export default addClass(nav(navLeft, navRight), 'navbar');
