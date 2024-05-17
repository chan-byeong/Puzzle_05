import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import MateHome from "./components/Mate/MateHome";
import WriteMate from "./components/Mate/WriteMate";
import MateDetail from "./components/Mate/MateDetail";
import RoomMate from "./components/Mate/RoomMate";

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
            children: [
              {
                path: "/community/all",
                element: <RoomMate />,
              },
              {
                path: "/community/mate",
                element: <RoomMate />,
              },
              {
                path: "/community/share",
                element: <h1>Share</h1>,
              },
            ],
          },
          // MATEHOME 헤더가 아닌 다른 헤더 사용할 경우 아래로 라우팅
          {
            path: "/community/mate-post",
            element: <WriteMate />,
          },
          {
            path: "/community/mate/:uid",
            element: <MateDetail />,
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
