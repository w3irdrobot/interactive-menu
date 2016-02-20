import { addClass, div, h1, text } from '../builders';
import menuItem from './menuItem';

export default function menuList(headline, items = []) {
  const menuItems = items.map(menuItem);

  const title = addClass(h1(text(headline)), 'title');

  return addClass(div(title, ...menuItems), 'collection');
}
