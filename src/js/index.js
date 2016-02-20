import app from './components/app';

const body = document.querySelector('body');
body.insertBefore(app(), body.childNodes[0]);
