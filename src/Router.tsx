import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import BulletinPage from "./Pages/BulletinPage";
import RoomMatePage from "./Pages/RoomMatePage";
import SharePage from "./Pages/SharePage";
import AnnouncementPage from "./Pages/AnnouncementPage";

import WriteMate from "./components/Mate/WriteMate";
import MateDetail from "./components/Mate/MateDetail";

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
            element: <BulletinPage />,
            children: [
              {
                path: "/community/all",
                element: <h1>ALL</h1>,
              },
              {
                path: "/community/mate",
                element: <RoomMatePage />,
              },
              {
                path: "/community/share",
                element: <SharePage />,
              },
              {
                path: "/community/announcement",
                element: <AnnouncementPage />,
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
            path: "/community/announcement/:aid",
            element: <h1>Others</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
