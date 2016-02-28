import { addClass, addId, div, section } from '../builders';
import { setChildren } from '../helpers';
import leftMenu from './leftMenu';
import rightMenu from './rightMenu';

export default function menu(store) {
  const menuEle = addId(addClass(div(), 'container'), 'menu');

  store.on('SET_ITEMS', ({ items }) => {
    const columns = addClass(section(leftMenu(items), rightMenu(items)), 'columns');
    setChildren('#menu', columns);
  });

  return menuEle;
}
