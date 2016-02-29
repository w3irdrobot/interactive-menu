import { addClass, i, li, span, text } from '../builders';
import { formatPrice } from '../helpers';

export default function modalItem(itemData) {
  const name = addClass(span(text(itemData.name)), 'name');
  const price = addClass(span(text(formatPrice(itemData.price))), 'price', 'is-pulled-right');
  const removeButton = addClass(i(), 'fa', 'fa-times', 'remove');

  const item = addClass(li(name, price, removeButton), 'menu-item');
  item.dataset.key = itemData.id;

  return item;
}
