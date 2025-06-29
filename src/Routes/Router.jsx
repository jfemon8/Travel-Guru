import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Main from "../components/Main/Main";
import Booking from "../pages/booking";
import Place from "../pages/Place";

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
        Component: Booking,
        loader: async ({ params }) => {
          const res = await fetch(`/places.json`);
          const data = await res.json();
          return data.find((place) => place.id === params.id);
        },
      },
      {
        path: "place/:placeId",
        Component: Place,
        loader: () => {
          return fetch("/hotels.json").then((res) => res.json());
        },
      },
    ],
  },
]);

export default router;
