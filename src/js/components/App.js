import { div, ul, li, text, addId } from '../builders';

const listItems = ['Jalapeño Poppers', 'Mozzarella Sticks'].map(app => li(text(app)));
const list = ul(...listItems);
const appetizers = addId(div(list), 'appetizers');
const left = addId(div(appetizers), 'left');
const App = addId(div(left), 'app-container');

export default App;
