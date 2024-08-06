import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../layout/WebsiteLayout";
import Home from "../pages/website/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
