import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Pages/Error";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Campains from "../Pages/Campains";
import Donate from "../Pages/Donate";
import Faq from "../Pages/Faq";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <Error></Error>,
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/sign-up",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "campaigns",
    element: (
      <PrivateRoutes>
        <Campains></Campains>{" "}
      </PrivateRoutes>
    ),
  },

  {
    path: "/donate/:id",
    element: (
      <PrivateRoutes>
        {" "}
        <Donate></Donate>
      </PrivateRoutes>
    ),
  },

  {
    path: "faq",
    element: <Faq></Faq>,
  },
]);

export default router;
