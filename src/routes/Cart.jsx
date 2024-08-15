import { useLoaderData } from "react-router-dom";
import { getCart } from "../cart";
import { getCards } from "../cards";
import CartEntry from "../components/CartEntry";

export async function cartLoader() {
  const cards = await getCards();

  const cart = getCart();
  const cartEntries = Object.entries(cart);
  return { cards, cartEntries };
}

export default function Cart() {
  const { cards, cartEntries } = useLoaderData();
  const cartCards = cartEntries?.map(([id, amount]) => {
    return { ...cards.find((card) => card.id == id), amount: amount };
  });
  return (
    <section>
      {cartCards.map((card) => (
        <article key={card.id}>
          <CartEntry imageUrl={card.image} {...card} />
        </article>
      ))}
    </section>
  );
}
