import { redirect } from "react-router-dom";
import { deleteCartEntry } from "../cart";

export function destroyAction({ params }) {
  deleteCartEntry(params.cardId);
  return redirect("/cart");
}
