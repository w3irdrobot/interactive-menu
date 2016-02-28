export function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

export function isType(type) {
  return function itemIsType(item) {
    return item.type === type;
  };
}

export function $(query) {
  const elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function on(event, cb) {
    elements.forEach(ele => {
      ele.addEventListener(event, cb);
    });
  }

  function children(toAdd) {
    elements.forEach(ele => {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      ele.appendChild(toAdd);
    });
  }

  function addClass(klass) {
    elements.forEach(ele => {
      ele.classList.add(klass);
    });
  }

  function removeClass(klass) {
    elements.forEach(ele => {
      ele.classList.remove(klass);
    });
  }

  return {
    on,
    children,
    addClass,
    removeClass,
  };
}
