import { redirect } from "react-router-dom";
import { deleteCartEntry } from "../cart";

export function destroyAction({ request, params }) {
  console.log(request);
  deleteCartEntry(params.cardId);
  return redirect("/cart");
}
