import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import ChefDetails from "../page/ChefDetails/ChefDetails";
import ErrorPage from "../page/Error/ErrorPage";
import Login from "../Account/Login/Login";
import SignUp from "../Account/SignUp/SignUp";
import PrivateRoutes from "../Private/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails></ChefDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;
