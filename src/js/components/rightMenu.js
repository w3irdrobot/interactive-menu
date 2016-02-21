import { addClass, div } from '../builders';
import { isType } from '../helpers';
import menuList from './menuList';

export default function rightMenu(items = []) {
  const appetizers = menuList('Soups and Salads', items.filter(isType('soup_salad')));
  const desserts = menuList('Desserts', items.filter(isType('dessert')));

  return addClass(div(appetizers, desserts), 'column', 'is-6');
}
