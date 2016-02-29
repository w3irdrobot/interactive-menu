export function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

export function filterByType(map, type) {
  return Object.keys(map)
    .filter(key => map[key].type === type)
    .map(key => map[key]);
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

  function attr(attribute, value) {
    elements.forEach(ele => {
      if (value === false) {
        ele.removeAttribute(attribute);
      } else {
        ele.setAttribute(attribute, value);
      }
    });
  }

  function map(cb) {
    return elements.map(cb);
  }

  return {
    on,
    children,
    addClass,
    removeClass,
    attr,
    map,
  };
}
