import { createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <h1>Root Page</h1>,
      },
    ],
  },
]);

export default router;
