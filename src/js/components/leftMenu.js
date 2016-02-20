import { addClass, div } from '../builders';
import menuList from './menuList';

export default function leftMenu(items = []) {
  const appetizers = menuList('Appetizers', items.filter(item => item.type === 'appetizer'));

  return addClass(div(appetizers), 'column', 'is-6');
}
