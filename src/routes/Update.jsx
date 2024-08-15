import { replace } from "react-router-dom";
import { updateCart } from "../cart";

export async function updateAction({ request, params }) {
  updateCart(Number(params.cardId), Number(params.amount));

  const origin = (await request.formData()).get("origin");
  return replace(origin);
}
