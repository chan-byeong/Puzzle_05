import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import MateHome from "./components/Mate/MateHome";
import WriteMate from "./components/Mate/WriteMate";

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
        path: "/community",
        element: <Outlet />,
        children: [
          {
            path: "/community",
            element: <MateHome />,
          },
          {
            path: "/community/mate-post",
            element: <WriteMate />,
          },
          {
            path: "/community/bob-mate",
            element: <h1>BOB MATE</h1>,
          },
          {
            path: "/community/lang-exchange",
            element: <h1>Language Exchange</h1>,
          },
          {
            path: "/community/others",
            element: <h1>Others</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
