import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import DrawerToogeButton from '../../atoms/drawerToggleButton/DrawerToggleButton';
import Logo from '../../atoms/logo/Logo';
import UnresponsiveMenu from '../../molecules/unresponsiveMenu/UnresponsiveMenu';
import ResponsiveMenu from '../../molecules/responsiveMenu/ResponsiveMenu';
import { Wrapper, } from './styled';

const ID = 'header';

export default function Header(props) {
  const [ showMenu, setShowMenu, ] = useState(false);
  const { items, } = props;

  console.log(showMenu);

  return (
    <Wrapper id={ID}>
      <Logo />
      <UnresponsiveMenu items={items} showMenu={showMenu} />
      <ResponsiveMenu items={items} showMenu={showMenu} />
      <DrawerToogeButton onChange={setShowMenu} />
    </Wrapper>
  );
}

Header.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
