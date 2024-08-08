import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../layout/WebsiteLayout";
import AuthLayout from "../layout/AuthLayout";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/website/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Dashboard from "../pages/app/Dashboard";
import Tables from "../pages/app/Tables";

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
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/sign-up",
        element: <Register />,
      },
      {
        path: "/auth/forgot-pass",
        element: <ForgotPassword />,
      }
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "/app/dashboard",
        element: <Dashboard />
      },
      {
        path: "/app/tables",
        element: <Tables />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
