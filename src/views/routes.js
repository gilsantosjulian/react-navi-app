import React from 'react';
import { mount, route, } from 'navi';
import App from '../App';
import Product from '../Product';

// Define your routes
const routes = mount(
  {
    '/': route(
      {
        title: 'App',
        getData: () => {},
        view: <App />,
      }
    ),
    // "/products": lazy(() => import("./productsRoutes"))
    '/product': route(
      {
        title: 'Product',
        getData: () => {},
        view: <Product />,
      }
    ),
  }
);

export default routes;
