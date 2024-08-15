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

const DEFAULT_URL =
  "https://production-endpoint.azureedge.net/images/64RJ4C9I6TFJAC1GF0QJ0C0/3fbf0cf6-76ce-48e0-a69e-17d7fa5fabb9/172127_500x500_500x500.tif.jpg";

const Card = ({
  title = "unnamed",
  price = "free",
  imageUrl = DEFAULT_URL,
}) => {
  return (
    <div className={card}>
      <img src={imageUrl} alt={cardTitle} className={cardImage} />
      <div className={cardContent}>
        <div>
          <span className={cardPrice}>{price}</span>
          <h3 className={cardTitle}>{title}</h3>
        </div>
        <form method="post" className={cardForm}>
          <NumberPicker id={`${title}-count`} />
          <button className={`styled primary ${cardButton}`}>
            add to cart
          </button>
        </form>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: string,
  price: number,
  imageUrl: string,
};

export default Card;
