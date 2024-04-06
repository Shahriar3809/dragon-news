import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsPage from "../pages/NewsPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsPage></NewsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <h2>Hi</h2>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);


export default router;