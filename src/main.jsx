import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from "./layout/HomeLayout";
import CategoryNews from "./Pages/CategoryNews";
import AuthLayout from "./layout/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./Provider/AuthProvider";
import NewsDetails from "./Pages/NewsDetails";
import PrivateRoute from "./Route/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [

      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>
      },


      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },

  {
    path: "/singleNews/:id",
    element: <PrivateRoute>
                  <NewsDetails></NewsDetails>
              </PrivateRoute>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },

      {
        path: "/auth/register",
        element: <Register></Register>
      },


    ]
  },

  {
    path: "*",
    element: <h1>ERROR!</h1>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
