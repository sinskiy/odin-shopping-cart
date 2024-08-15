import { useLoaderData } from "react-router-dom";
import { getCards } from "../cards";
import Card from "../components/Card";
import { cards } from "./Shop.module.css";

export async function shopLoader() {
  const cards = await getCards();
  return cards;
}

export default function Shop() {
  const apiCards = useLoaderData();
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
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
