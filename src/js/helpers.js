export function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

export function isType(type) {
  return function itemIsType(item) {
    return item.type === type;
  };
}

export function $(query) {
  return document.querySelector(query);
}

export function setChildren(query, children) {
  const ele = $(query);

  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }

  ele.appendChild(children);
}
