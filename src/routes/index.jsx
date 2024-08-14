import Home from "./Home";
import Root from "./Root";
import Shop from "./Shop";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
