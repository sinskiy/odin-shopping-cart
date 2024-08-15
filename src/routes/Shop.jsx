import { useLoaderData } from "react-router-dom";
import { getCards } from "../cards";
import Card from "../components/Card";

export async function shopLoader() {
  const cards = await getCards();
  return cards;
}

export default function Shop() {
  const cards = useLoaderData();
  return (
    <section>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          price={card.price}
          imageUrl={card.image}
        />
      ))}
    </section>
  );
}
