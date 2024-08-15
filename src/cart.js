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
