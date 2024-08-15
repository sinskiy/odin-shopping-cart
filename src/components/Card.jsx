import { number, string } from "prop-types";
import {
  card,
  cardImage,
  cardContent,
  cardPrice,
  cardTitle,
  cardButton,
  cardForm,
} from "./Card.module.css";
import NumberPicker from "./NumberPicker";
import { Form } from "react-router-dom";
import { updateCart } from "../cart";
import { useState } from "react";

export async function cardAction({ request }) {
  const formData = await request.formData();
  const [id, amount] = [...formData.entries()][0];
  updateCart(Number(id), Number(amount));
  return null;
}

const Card = ({ id, title, price, imageUrl }) => {
  const [value, setValue] = useState(1);
  return (
    <div className={card}>
      <img src={imageUrl} alt={cardTitle} className={cardImage} />
      <div className={cardContent}>
        <div>
          <span className={cardPrice}>{price}</span>
          <h3 className={cardTitle}>{title}</h3>
        </div>
        <Form method="post" className={cardForm}>
          <NumberPicker
            value={value}
            setValue={setValue}
            id={`${id}-count`}
            name={`${id}`}
          />
          <button type="submit" className={`styled primary ${cardButton}`}>
            add to cart
          </button>
        </Form>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  imageUrl: string.isRequired,
};

export default Card;
