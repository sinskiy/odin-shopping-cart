import { redirect } from "react-router-dom";
import { deleteCartEntry } from "../cart";

export async function destroyAction({ request, params }) {
  deleteCartEntry(params.cardId);

  const origin = (await request.formData()).get("origin");
  return redirect(origin);
}
