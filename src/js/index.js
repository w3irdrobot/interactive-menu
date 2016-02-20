import app from './components/app';

fetch('food.json')
  .then(res => res.json())
  .then(resBody => {
    const body = document.querySelector('body');
    body.insertBefore(app(resBody), body.childNodes[0]);
  });
