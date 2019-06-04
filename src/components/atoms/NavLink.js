import React from 'react';
import Styled, { withTheme, } from 'styled-components';
import PropTypes from 'prop-types';
import { Link, } from 'react-navi';

const NavLink = Styled.li`
  display: flex;
  max-width: 100%;
  height: 50%;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  flex-direction: column;
  justify-content: center;
  font-family: Foundry;
  outline: none;
  margin: 0px;
  padding: 6px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

const Span = Styled.span`
  font-family: Open Sans;
  font-weight: 300;
  font-size: 16px;
  padding: .6em;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const styles = {
  anchor: {
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

function Navlink(props) {
  const { item, theme, } = props;
  const anchorStyle = { ...styles.anchor, color: theme.colors.primary, };

  return (
    <NavLink key={`${item.href}-${item.title}`}>
      <Link style={anchorStyle} key={`${item.href}-${item.title}`} href={item.href}>
        <Span>{item.title}</Span>
      </Link>
    </NavLink>
  );
}

Navlink.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
  theme: Object.isRequired,
};

export default withTheme(Navlink);