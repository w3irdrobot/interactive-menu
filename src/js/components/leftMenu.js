import { addClass, div } from '../builders';
import { filterByType } from '../helpers';
import menuList from './menuList';

export default function leftMenu(items = []) {
  const appetizers = menuList('Appetizers', filterByType(items, 'appetizer'));
  const burgers = menuList('Burgers', filterByType(items, 'burger'));

  return addClass(div(appetizers, burgers), 'column', 'is-6');
}
