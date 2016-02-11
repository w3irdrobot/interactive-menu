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

export function ul(...children) {
  return createElement('ul', ...children);
}

export function li(...children) {
  return createElement('li', ...children);
}

export function addId(element, id) {
  const newElement = element.cloneNode(true);
  return Object.assign(newElement, { id });
}
