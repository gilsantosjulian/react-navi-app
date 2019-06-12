import React, { useState, useEffect, } from 'react';
import BusyIndicator from 'react-busy-indicator';
import { ThemeProvider, } from 'styled-components';
import { useLoadingRoute, } from 'react-navi';
import { colors, } from '../../../config/theme';
import { items, } from '../../../config/constants';
import Nav from '../../organisms/nav/Nav';
import { Wrapper, Main, Header, } from './styled';

const ID = 'layout';

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
      <Wrapper id={ID}>
        {/* This component shows a loading indicator after a delay */}
        <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
        <Header id="header" scrollY={scrollY}>
          <Nav items={items} />
        </Header>
        <Main>{children}</Main>
      </Wrapper>
    </ThemeProvider>
  );
}
