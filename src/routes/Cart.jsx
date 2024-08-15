import { useLoaderData } from "react-router-dom";
import { getCart } from "../cart";

export function loader() {
  const cartEntries = getCart();
  return cartEntries;
}

export default function Cart() {
  const cartEntries = useLoaderData();
  console.log(cartEntries);
  return <section></section>;
}
