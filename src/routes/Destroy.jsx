import { useNavigate } from "react-router-dom";
import { deleteCartEntry } from "../cart";
import { useEffect } from "react";

export function destroyAction({ request, params }) {
  console.log(request);
  deleteCartEntry(params.cardId);
  return null;
}

export default function Destroy() {
  const navigate = useNavigate();
  useEffect(() => navigate("/cart"), []);
  return;
}
