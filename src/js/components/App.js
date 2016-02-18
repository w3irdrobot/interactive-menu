import { div, addId } from '../builders';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

// Todo: Modal needs to be above all content

const App = addId(div(Navbar, Hero, Footer), 'app-container');

export default App;
