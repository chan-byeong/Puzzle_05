import { createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import MateHome from "./components/Mate/MateHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/mate",
        element: <MateHome />,
        children: [
          {
            path: "/mate/room-mate",
            element: <h1>roommate</h1>,
          },
          {
            path: "/mate/bob-mate",
            element: <h1>BOB MATE</h1>,
          },
          {
            path: "/mate/lang-exchange",
            element: <h1>Language Exchange</h1>,
          },
          {
            path: "/mate/others",
            element: <h1>Others</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
