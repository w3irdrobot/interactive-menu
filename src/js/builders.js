export function text(words) {
  return document.createTextNode(words);
}

export function createElement(type, ...children) {
  const newElement = document.createElement(type);
  children.forEach(child => newElement.appendChild(child));
  return newElement;
}

export function div(...children) {
  return createElement('div', ...children);
}

export function article(...children) {
  return createElement('article', ...children);
}

export function h1(...children) {
  return createElement('h1', ...children);
}

export function h3(...children) {
  return createElement('h3', ...children);
}

export function nav(...children) {
  return createElement('nav', ...children);
}

export function ul(...children) {
  return createElement('ul', ...children);
}

export function li(...children) {
  return createElement('li', ...children);
}

export function i(...children) {
  return createElement('i', ...children);
}

export function span(...children) {
  return createElement('span', ...children);
}

export function section(...children) {
  return createElement('section', ...children);
}

export function footer(...children) {
  return createElement('footer', ...children);
}

export function p(...children) {
  return createElement('p', ...children);
}

export function img(source) {
  const image = createElement('img');
  image.src = source;
  return image;
}

export function button(...children) {
  return createElement('button', ...children);
}

export function addId(element, id) {
  const newElement = element.cloneNode(true);
  return Object.assign(newElement, { id });
}

export function addClass(element, ...klasses) {
  const newElement = element.cloneNode(true);
  klasses.forEach(klass => newElement.classList.add(klass));
  return newElement;
}
