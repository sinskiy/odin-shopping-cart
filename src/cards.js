export async function getCards() {
  const response = await fetch("https://fakestoreapi.com/products");
  const cards = await response.json();
  return cards;
}
