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

export async function cardAction({ request }) {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData));
  return null;
}

const DEFAULT_URL =
  "https://production-endpoint.azureedge.net/images/64RJ4C9I6TFJAC1GF0QJ0C0/3fbf0cf6-76ce-48e0-a69e-17d7fa5fabb9/172127_500x500_500x500.tif.jpg";

const Card = ({
  id = 1,
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
        <Form method="post" className={cardForm}>
          <NumberPicker id={`${id}-count`} name={`${id}`} />
          <button type="submit" className={`styled primary ${cardButton}`}>
            add to cart
          </button>
        </Form>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: number,
  title: string,
  price: number,
  imageUrl: string,
};

export default Card;
