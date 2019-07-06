import React from 'react';
import PropTypes from 'prop-types';
// import Navlink from '../../atoms/navLink/NavLink';
import { Wrapper, } from './styled';

const ID = 'nav';

export default function ResponsiveMenu(props) {
  const { items, showMenu, } = props;

  console.log(items);

  return <Wrapper id={ID}>{showMenu && <span>Hola Julian</span>}</Wrapper>;
}

ResponsiveMenu.propTypes = {
  items: PropTypes.instanceOf(PropTypes.object).isRequired,
  showMenu: PropTypes.bool.isRequired,
};
