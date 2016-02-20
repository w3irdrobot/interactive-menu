import { div, addId } from '../builders';
import navbar from './navbar';
import hero from './hero';
import bottom from './bottom';

// Todo: Modal needs to be above all content

export default function app() {
  return addId(div(navbar(), hero(), bottom()), 'app-container');
}
