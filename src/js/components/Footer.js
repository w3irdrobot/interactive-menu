import { addClass, div, footer } from '../builders';

const content = addClass(div(), 'content', 'is-centered');

const container = addClass(div(content), 'container');

export default addClass(footer(container), 'footer');
