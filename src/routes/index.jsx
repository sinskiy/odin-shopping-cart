import Cart from "./Cart";
import Home from "./Home";
import Root from "./Root";
import Shop from "./Shop";

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
      },
      {
        path: "/cart",
        name: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
