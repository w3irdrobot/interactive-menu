import { nav, div, addClass } from '../builders';

const logo = addClass(div(), 'navbar-left', 'logo');
const cart = addClass(div(), 'navbar-right', 'cart');
const Navbar =  addClass(nav(logo, cart), 'navbar');

export default Navbar;
