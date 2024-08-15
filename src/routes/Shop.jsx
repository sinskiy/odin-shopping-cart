import { useLoaderData } from "react-router-dom";
import { getCards } from "../cards";
import Card from "../components/Card";
import { cards } from "./Shop.module.css";
import { getCart } from "../cart";

export async function shopLoader() {
  const cards = await getCards();

  const cart = getCart();
  const cartEntries = Object.entries(cart);
  return { cards, cartEntries };
}

export default function Shop() {
  const { cards: apiCards, cartEntries } = useLoaderData();

  return (
    <section>
      <ul className={cards} role="list">
        {apiCards.map((card) => (
          <li key={card.id}>
            <Card
              id={card.id}
              title={card.title}
              price={card.price}
              imageUrl={card.image}
              amount={cartEntries.find(([id]) => id == card.id)?.at(1)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
