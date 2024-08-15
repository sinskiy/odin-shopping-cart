import Cart, { cartLoader } from "./Cart";
import { destroyAction } from "./Destroy";
import ErrorElement from "./ErrorElement";
import Home from "./Home";
import Root from "./Root";
import Shop, { shopLoader } from "./Shop";
import { updateAction } from "./Update";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        errorElement: <ErrorElement />,
        children: [
          { index: true, name: "home", element: <Home /> },
          {
            path: "/shop",
            name: "shop",
            element: <Shop />,
            loader: shopLoader,
          },
          {
            path: "/cart",
            name: "cart",
            element: <Cart />,
            loader: cartLoader,
          },
          {
            path: "/cart/:cardId",
            action: destroyAction,
          },
          {
            path: "/cart/:cardId/:amount",
            action: updateAction,
          },
        ],
      },
    ],
  },
];

export default routes;
