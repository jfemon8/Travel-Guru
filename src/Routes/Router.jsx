import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Main from "../components/Main/Main";
import Booking from "../pages/booking";
import Place from "../pages/Place";
import Auth from "../Layout/Auth";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import PrivateRoute from "../provider/PrivateRoute";
import AuthRoute from "../provider/AuthRoute";
import NotFound from "../pages/NotFound";
import ResetPassword from "../components/Auth/ResetPassword";
import CommonLayout from "../Layout/CommonLayout";
import News from "../pages/News";
import SingleNews from "../pages/SingleNews";
import Destination from "../pages/Destination";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "booking/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
        // Component: Booking,
        loader: async ({ params }) => {
          const res = await fetch(`/places.json`);
          const data = await res.json();
          return data.find((place) => place.id === params.id);
        },
      },
      {
        path: "place/:placeId",
        element: (
          <PrivateRoute>
            <Place />
          </PrivateRoute>
        ),
        // Component: Place,
        loader: () => {
          return fetch("/hotels.json").then((res) => res.json());
        },
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <AuthRoute>
        <Auth />
      </AuthRoute>
    ),
    // Component: Auth,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "/home",
    Component: CommonLayout,
    children: [
      {
        path: "news",
        Component: News,
      },
      {
        path: "news/:id",
        element: (
          <PrivateRoute>
            <SingleNews />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/news.json");
          const data = await res.json();
          return data.find((news) => news.id === parseInt(params.id));
        },
      },
      {
        path: "destination/",
        Component: Destination,
        loader: async () => {
          const res = await fetch("/places.json");
          return res.json();
        },
      },
      {
        path: "blog",
        Component: React.lazy(() => import("../pages/blogs")),
        loader: async () => {
          const res = await fetch("/blogs.json");
          return res.json();
        },
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
