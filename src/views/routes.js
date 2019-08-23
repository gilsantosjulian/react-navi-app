import React from 'react';
import { mount, route, } from 'navi';
import Home from './home/Home';
import About from './About/About';
import Services from './Services/Services';
import Galery from './Galery/Galery';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import NotFound from './notFound/NotFound';

// Define your routes
const routes = mount({
  '/': route({
    title: 'Home',
    getData: () => {},
    view: <Home />,
  }),
  '/home': route({
    title: 'Home',
    getData: () => {},
    view: <Home />,
  }),
  '/about-us': route({
    title: 'About Us',
    getData: () => {},
    view: <About />,
  }),
  '/services': route({
    title: 'Services',
    getData: () => {},
    view: <Services />,
  }),
  '/galery': route({
    title: 'Galery',
    getData: () => {},
    view: <Galery />,
  }),
  '/blog': route({
    title: 'Blog',
    getData: () => {},
    view: <Blog />,
  }),
  '/contact-us': route({
    title: 'Contact Us',
    getData: () => {},
    view: <Contact />,
  }),
  // "/products": lazy(() => import("./productsRoutes"))
  '/notFound': route({
    title: 'NotFound',
    getData: () => {},
    view: <NotFound />,
  }),
});

export default routes;
