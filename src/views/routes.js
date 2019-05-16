import React from "react";
import { lazy, mount, route } from "navi";
import { Router } from "react-navi";
import App from "../App.js";
import Product from "../Product.js";

// Define your routes
const routes = mount({
  "/": route({
    title: "App",
    getData: () => {},
    view: <App />
  }),
  //"/products": lazy(() => import("./productsRoutes"))
  "/product": route({
    title: "Product",
    getData: () => {},
    view: <Product />
  })
});

export default routes;
