import { number, string } from "prop-types";
import {
  cartEntryTitle,
  cartEntryTotalPrice,
  cartEntryPrice,
} from "./CartEntry.module.css";

const CartEntry = ({ title, price, amount, imageUrl }) => {
  const totalPrice = price * amount;
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <span className={cartEntryTotalPrice}>{totalPrice}</span>
        <span className={cartEntryPrice}>{price}</span>
        <h3 className={cartEntryTitle}>{title}</h3>
      </div>
    </div>
  );
};
CartEntry.propTypes = {
  title: string,
  price: number,
  amount: number,
  imageUrl: string,
};

export default CartEntry;
