import { useLoaderData, useOutletContext } from "react-router-dom";
import { getCart } from "../cart";
import { getCards } from "../cards";
import CartEntry from "../components/CartEntry";
import { total } from "./Cart.module.css";
import { useEffect } from "react";

export async function cartLoader() {
  const cards = await getCards();

  const cart = getCart();
  const cartEntries = Object.entries(cart);
  return { cards, cartEntries };
}

export default function Cart() {
  const { cards, cartEntries } = useLoaderData();
  const cartCards = cartEntries?.map(([id, amount]) => {
    return { ...cards.find((card) => card.id == id), amount };
  });
  const setCartLength = useOutletContext();
  useEffect(() => {
    setCartLength(cartCards.length);
  }, [cartCards.length]);

  const totalPrice = cartCards.reduce(
    (total, card) => (total += card.amount * card.price),
    0,
  );

  return (
    <section>
      {cartCards.length > 0 ? (
        <>
          <article className={total}>
            <h2>
              total price: <strong>{totalPrice}$</strong>
            </h2>
            <button type="button" className="styled primary">
              checkout
            </button>
          </article>
          {cartCards.map((card) => (
            <article key={card.id}>
              <CartEntry imageUrl={card.image} {...card} />
            </article>
          ))}
        </>
      ) : (
        <p className={total}>Nothing added</p>
      )}
    </section>
  );
}
