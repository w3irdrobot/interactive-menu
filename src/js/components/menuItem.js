import { addClass, article, button, div, h3, p, span, text } from '../builders';
import { formatPrice } from '../helpers';

export default function menuItem(itemData = {}) {
  const name = addClass(h3(text(itemData.name)), 'name');
  const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
  const description = addClass(p(text(itemData.description)), 'desc');
  const addToCart = addClass(button(text('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

  const mediaContent = addClass(div(name, price, description, addToCart), 'media-content');

  const item = addClass(article(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;

  return item;
}
