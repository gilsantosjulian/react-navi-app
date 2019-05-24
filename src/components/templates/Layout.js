import BusyIndicator from 'react-busy-indicator';
import React from 'react';
import { Link, useLoadingRoute, } from 'react-navi';

export default function Layout({ children, }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  const loadingRoute = useLoadingRoute();

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/galery">Galery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact us</Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
