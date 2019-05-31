import React from 'react';
import BusyIndicator from 'react-busy-indicator';
import Styled from 'styled-components';
import { useLoadingRoute, } from 'react-navi';
import Navbar from '../organisms/Nabvar';

const items = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
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
    title: 'Contact',
    href: '/contact-us',
  },
];

const Main = Styled.div``;
const Header = Styled.div`
  padding: .15em 28px;
  width: 100%;
`;

export default function Layout({ children, }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  const loadingRoute = useLoadingRoute();

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
      <Header>
        <Navbar items={items} />
      </Header>
      <Main>{children}</Main>
    </div>
  );
}
