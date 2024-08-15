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
import { useState } from "react";

const Card = ({ id, title, price, imageUrl, amount }) => {
  const [value, setValue] = useState(amount ?? 1);

  return (
    <div className={card}>
      <img src={imageUrl} alt={cardTitle} className={cardImage} />
      <div className={cardContent}>
        <div>
          <span className={cardPrice}>{price}$</span>
          <h3 className={cardTitle}>{title}</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Form
            method="post"
            action={`/cart/${id}/${value}`}
            className={cardForm}
          >
            <input type="hidden" name="origin" value={location.pathname} />
            {amount ? (
              <>
                <NumberPicker
                  value={value}
                  setValue={setValue}
                  id={`${id}-count`}
                  name={`${id}`}
                />
              </>
            ) : (
              <button type="submit" className={`styled primary ${cardButton}`}>
                add to cart
              </button>
            )}
          </Form>
          {amount && (
            <Form method="delete" action={`/cart/${id}`}>
              <input type="hidden" name="origin" value={location.pathname} />
              <button type="submit" className="styled secondary">
                delete
              </button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  imageUrl: string.isRequired,
  amount: number,
};

export default Card;
