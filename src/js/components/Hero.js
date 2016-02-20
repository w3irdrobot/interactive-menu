import { addClass, div, img, p, section, text } from '../builders';

export default function hero() {
  const logo = addClass(img('static/fancybear_white.png'), 'logo');
  const the = addClass(p(text('The')), 'hero-text-light');
  const fancyBear = addClass(p(text('Fancy Bear')), 'hero-text-bold');
  const eateries = addClass(p(text('Eateries')), 'hero-text-light');

  const container = addClass(div(logo, the, fancyBear, eateries), 'container');

  const heroContent = addClass(div(container), 'hero-content');

  return addClass(section(heroContent), 'hero', 'splash');
}
