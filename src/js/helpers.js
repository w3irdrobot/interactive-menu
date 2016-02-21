export function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

export function isType(type) {
  return function itemIsType(item) {
    return item.type === type;
  };
}
