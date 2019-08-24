import React from 'react';
import { Link, } from 'react-navi';
import PropTypes from 'prop-types';
import { withTheme, } from 'styled-components';
import { useStateValue, } from '../../../stateContext';
import { NavLink, Span, styles, } from './styled';

const ID = 'li';

function Navlink(props) {
  const { item, theme, } = props;
  const [ dispatch, ] = useStateValue();
  const anchorStyle = { ...styles.anchor, color: theme.colors.primary, };

  const onChange = () => dispatch({
    type: 'showResponsiveMenu',
  });

  return (
    <NavLink id={ID} key={`${item.href}-${item.title}`}>
      <Link
        id="anchor"
        style={anchorStyle}
        key={`${item.href}-${item.title}`}
        href={item.href}
        onClick={onChange}
        activeClassName="active"
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
