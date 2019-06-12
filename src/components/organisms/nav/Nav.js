import React from 'react';
import PropTypes from 'prop-types';
import DrawerToogeButton from '../../atoms/drawerToggleButton/DrawerToggleButton';
import Logo from '../../atoms/logo/Logo';
import Ul from '../../molecules/ui/Ul';
import { Wrapper, } from './styled';

const ID = 'nav';

export default function Nav(props) {
  const { items, } = props;

  return (
    <Wrapper id={ID}>
      <Logo />
      <Ul items={items} />
      <DrawerToogeButton />
    </Wrapper>
  );
}

Nav.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
