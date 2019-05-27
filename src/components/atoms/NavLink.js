import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, } from 'react-navi';

const NavLink = Styled.li`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.4;
  color: currentColor;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

export default function Navlink(props) {
  const { item, } = props;

  return (
    <NavLink>
      <Link href={item.href}>{item.title}</Link>
    </NavLink>
  );
}

Navlink.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
};
