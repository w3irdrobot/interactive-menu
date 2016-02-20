import { addClass, div } from '../builders';
import menuList from './menuList';

export default function leftMenu(items = []) {
  const appetizers = menuList('Appetizers', items.filter(item => item.type === 'appetizer'));
  const burgers = menuList('Burgers', items.filter(item => item.type === 'burger'));

  return addClass(div(appetizers, burgers), 'column', 'is-6');
}
