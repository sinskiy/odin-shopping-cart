export function getCart() {
  const JSONCart = localStorage.getItem("cart");
  const cart = JSONCart ? JSON.parse(JSONCart) : {};
  return cart;
}

export function updateCart(id, amount) {
  const cart = getCart();

  cart[id] = amount;
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function deleteCartEntry(id) {
  const cart = getCart();

  delete cart[id];
  localStorage.setItem("cart", JSON.stringify(cart));
}
