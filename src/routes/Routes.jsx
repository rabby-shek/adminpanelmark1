import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../layout/WebsiteLayout";
import Home from "../pages/website/Home";

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
]);

export default router;
