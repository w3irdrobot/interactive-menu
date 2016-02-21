import { div, addId } from '../builders';
import modal from './modal';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';
import bottom from './bottom';

export default function app(items = []) {
  return addId(div(modal(), navbar(), hero(), menu(items), bottom()), 'app-container');
}
