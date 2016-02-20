import { addClass, div, footer } from '../builders';

export default function bottom() {
  const content = addClass(div(), 'content', 'is-centered');

  const container = addClass(div(content), 'container');

  return addClass(footer(container), 'footer');
}
