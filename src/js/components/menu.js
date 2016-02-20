import { addClass, div, section } from '../builders';
import leftMenu from './leftMenu';
import rightMenu from './rightMenu';

export default function menu(items = []) {
  const columns = addClass(section(leftMenu(items), rightMenu(items)), 'columns');

  return addClass(div(columns), 'container');
}
