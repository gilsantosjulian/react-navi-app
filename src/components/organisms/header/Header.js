import React from 'react';
import PropTypes from 'prop-types';
import DrawerToogeButton from '../../atoms/drawerToggleButton/DrawerToggleButton';
import Logo from '../../atoms/logo/Logo';
import UnresponsiveMenu from '../../molecules/unresponsiveMenu/UnresponsiveMenu';
import ResponsiveMenu from '../../molecules/responsiveMenu/ResponsiveMenu';
import { Wrapper, } from './styled';

const ID = 'header';

export default function Header(props) {
  const { items, } = props;

  return (
    <Wrapper id={ID}>
      <Logo />
      <UnresponsiveMenu items={items} />
      <ResponsiveMenu items={items} />
      <DrawerToogeButton />
    </Wrapper>
  );
}

Header.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
