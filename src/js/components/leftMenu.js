import { addClass, div } from '../builders';
import { isType } from '../helpers';
import menuList from './menuList';

export default function leftMenu(items = []) {
  const appetizers = menuList('Appetizers', items.filter(isType('appetizer')));
  const burgers = menuList('Burgers', items.filter(isType('burger')));

  return addClass(div(appetizers, burgers), 'column', 'is-6');
}
