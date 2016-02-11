import { div, addId } from '../builders';
import NavBar from './Navbar';

const App = addId(div(NavBar), 'app-container');

export default App;
