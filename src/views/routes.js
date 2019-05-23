import React from 'react';
import { mount, route, } from 'navi';
import Home from './home/Home';
import NotFound from './notFound/NotFound';

// Define your routes
const routes = mount({
  '/': route({
    title: 'Home',
    getData: () => {},
    view: <Home />,
  }),
  // "/products": lazy(() => import("./productsRoutes"))
  '/notFound': route({
    title: 'NotFound',
    getData: () => {},
    view: <NotFound />,
  }),
});

export default routes;
