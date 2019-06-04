import React, { useState, useEffect, } from 'react';
import BusyIndicator from 'react-busy-indicator';
import Styled, { ThemeProvider, } from 'styled-components';
import { useLoadingRoute, } from 'react-navi';
import { backgroundColor, textColor, colors, } from '../../config/theme';
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

const Header = Styled.div`
  padding: .15em 28px;
  width: 100%;
  min-height: 40px;
  position: fixed;
  top: 0px;
  z-index: 1;
  background: white;
  opacity: ${props => (props.scrollY > 100 ? 0.9 : 1)};
  transition: opacity .3s ease-in-out;
`;

const Main = Styled.div`
  height: 1000vh;
`;

// apply theming to a styled component
const Wrapper = Styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;

export default function Layout({ children, }) {
  const [ scrollY, setScrollY, ] = useState(window.scrollY);

  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  const loadingRoute = useLoadingRoute();

  const handleScroll = () => setScrollY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <ThemeProvider theme={{ mode: 'light', colors, }}>
      <Wrapper>
        {/* This component shows a loading indicator after a delay */}
        <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
        <Header id="header" scrollY={scrollY}>
          <Navbar items={items} />
        </Header>
        <Main>{children}</Main>
      </Wrapper>
    </ThemeProvider>
  );
}
