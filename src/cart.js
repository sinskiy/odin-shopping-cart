export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart;
}
