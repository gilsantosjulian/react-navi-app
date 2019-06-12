import React from 'react';
import { Link, } from 'react-navi';
import PropTypes from 'prop-types';
import { withTheme, } from 'styled-components';
import { NavLink, Span, styles, } from './styled';

const ID = 'li';

function Navlink(props) {
  const { item, theme, } = props;
  const anchorStyle = { ...styles.anchor, color: theme.colors.primary, };

  return (
    <NavLink id={ID} key={`${item.href}-${item.title}`}>
      <Link
        id="anchor"
        style={anchorStyle}
        key={`${item.href}-${item.title}`}
        href={item.href}
      >
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
