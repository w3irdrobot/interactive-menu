import { addClass, addId, div, section } from '../builders';
import { $ } from '../helpers';
import leftMenu from './leftMenu';
import rightMenu from './rightMenu';

export default function menu(store) {
  const menuEle = addId(addClass(div(), 'container'), 'menu');

  store.on('SET_ITEMS', ({ items }) => {
    const columns = addClass(section(leftMenu(items), rightMenu(items)), 'columns');
    $('#menu').children(columns);
  });

  store.on('ITEM_ADDED', ({ cart }) => {
    const articles = [];
    const buttons = [];

    for (const entry of cart) {
      articles.push(`article[data-key='${entry}']`);
      buttons.push(`article[data-key='${entry}'] button.add-to-cart`);
    }

    $(articles.join(', ')).addClass('in-cart');
    $(buttons.join(', ')).attr('disabled', 'disabled');
  });

  store.on('ITEM_REMOVED', ({ cart }) => {
    const onPageKeys = $('article.in-cart').map(ele => parseInt(ele.dataset.key, 10));
    const inCartKeys = [...cart];
    const keysToRemove = onPageKeys.filter(key => !inCartKeys.includes(key));

    keysToRemove.forEach(key => {
      $(`article[data-key='${key}']`).removeClass('in-cart');
      $(`article[data-key='${key}'] button.add-to-cart`).attr('disabled', false);
    });
  });

  return menuEle;
}
