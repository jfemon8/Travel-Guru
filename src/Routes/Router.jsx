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
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
