import { addClass, div, section } from '../builders';
import leftMenu from './leftMenu';

export default function menu(items = []) {
  const columns = addClass(section(leftMenu(items)), 'columns');

  return addClass(div(columns), 'container');
}
