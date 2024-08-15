import { cardAction } from "../components/Card";
import Cart, { cartLoader } from "./Cart";
import { destroyAction } from "./Destroy";
import Home from "./Home";
import Root from "./Root";
import Shop, { shopLoader } from "./Shop";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, name: "home", element: <Home /> },
      {
        path: "/shop",
        name: "shop",
        element: <Shop />,
        loader: shopLoader,
        action: cardAction,
      },
      {
        path: "/cart",
        name: "cart",
        element: <Cart />,
        loader: cartLoader,
        action: cardAction,
      },
      {
        path: "/cart/:cardId",
        action: destroyAction,
      },
    ],
  },
];

export default routes;
