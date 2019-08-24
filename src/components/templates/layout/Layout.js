import React, { useState, useEffect, } from 'react';
import BusyIndicator from 'react-busy-indicator';
import { NotFoundBoundary, useLoadingRoute, } from 'react-navi';
import { ThemeProvider, } from 'styled-components';
import NotFound from '../../../views/notFound/NotFound';
import { useStateValue, } from '../../../stateContext';
import { colors, } from '../../../config/theme';
import { items, } from '../../../config/constants';
import Header from '../../organisms/header/Header';
import { Wrapper, Main, Container, } from './styled';

const ID = 'layout';

export default function Layout({ children, }) {
  const [ scrollY, setScrollY, ] = useState(window.scrollY);
  const [ { opacity, showResponsiveMenu, }, ] = useStateValue();

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
        <Container id="container" scrollY={scrollY}>
          <Header items={items} />
        </Container>
        <Main id="main" opacity={opacity ? '0.5' : '1'} transition={showResponsiveMenu}>
          <NotFoundBoundary render={() => <NotFound />}>{children}</NotFoundBoundary>
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}
