import { addClass, div } from '../builders';
import { filterByType } from '../helpers';
import menuList from './menuList';

export default function rightMenu(items = []) {
  const appetizers = menuList('Soups and Salads', filterByType(items, 'soup_salad'));
  const desserts = menuList('Desserts', filterByType(items, 'dessert'));

  return addClass(div(appetizers, desserts), 'column', 'is-6');
}
