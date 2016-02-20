import { addClass, div } from '../builders';
import menuList from './menuList';

export default function rightMenu(items = []) {
  const appetizers = menuList('Soups and Salads', items.filter(item => item.type === 'soup_salad'));
  const desserts = menuList('Desserts', items.filter(item => item.type === 'dessert'));

  return addClass(div(appetizers, desserts), 'column', 'is-6');
}
