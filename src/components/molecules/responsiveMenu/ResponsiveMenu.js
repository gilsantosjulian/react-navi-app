import React from 'react';
import PropTypes from 'prop-types';
import Navlink from '../../atoms/navLink/NavLink';
import { Wrapper, } from './styled';

const ID = 'nav';

export default function ResponsiveMenu(props) {
  const { items, showMenu, } = props;

  return (
    showMenu && (
      <Wrapper id={ID}>
        {items.map(item => (
          <Navlink key={`${item.title}_${item.href}`} item={item} />
        ))}
      </Wrapper>
    )
  );
}

ResponsiveMenu.propTypes = {
  items: PropTypes.instanceOf(PropTypes.object).isRequired,
  showMenu: PropTypes.bool.isRequired,
};
