import React from 'react';
import Navbar from '../organisms/Nabvar';

const items = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Abou',
    href: '/about-us',
  },
  {
    dropdown: true,
    title: 'Services',
    items: [
      {
        name: 'Service One',
        href: '/service-one',
      },
      {
        name: 'Service Two',
        href: '/service-two',
      },
    ],
  },
  {
    title: 'Galery',
    href: '/galery',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contac',
    href: '/contact-us',
  },
];

export default function Layout({ children, }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  // const loadingRoute = useLoadingRoute();

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      {/* <BusyIndicator isBusy={!!loadingRoute} delayMs={200} /> */}
      <Navbar items={items} />
      <main>{children}</main>
    </div>
  );
}
