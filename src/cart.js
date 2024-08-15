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

  console.log("before: " + cart);
  delete cart[id];
  console.log("after: " + cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}
