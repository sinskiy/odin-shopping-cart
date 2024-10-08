import { number, string } from "prop-types";
import {
  cartEntry,
  cartEntryImage,
  cartEntryContent,
  cartEntryTitle,
  cartEntryTotalPrice,
  cartEntryPrice,
} from "./CartEntry.module.css";
import { Form } from "react-router-dom";
import NumberPicker from "./NumberPicker";
import { useState } from "react";

const CartEntry = ({ id, title, price, amount, imageUrl }) => {
  const totalPrice = price * amount;

  const [value, setValue] = useState(amount);
  return (
    <div className={cartEntry}>
      <img className={cartEntryImage} src={imageUrl} alt={title} />
      <div className={cartEntryContent}>
        <div>
          <p className={cartEntryTotalPrice}>{totalPrice}$</p>
          <p className={cartEntryPrice}>{price}$ per item</p>
          <h3 className={cartEntryTitle}>{title}</h3>
        </div>
        <div>
          <Form method="post" action={`/cart/${id}/${value}`}>
            <input type="hidden" name="origin" value={location.pathname} />
            <NumberPicker
              value={value}
              setValue={setValue}
              buttons="submit"
              id={`${id}-count-cart`}
              name={`${id}`}
            />
          </Form>
          <Form method="delete" action={`/cart/${id}`}>
            <input type="hidden" name="origin" value={location.pathname} />
            <button
              type="submit"
              style={{ marginTop: "1rem" }}
              className="styled secondary"
            >
              delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
CartEntry.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  amount: number.isRequired,
  imageUrl: string.isRequired,
};

export default CartEntry;
