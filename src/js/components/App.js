import { div, addId } from '../builders';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';
import bottom from './bottom';

// Todo: Modal needs to be above all content

export default function app(items = []) {
  return addId(div(navbar(), hero(), menu(items), bottom()), 'app-container');
}
