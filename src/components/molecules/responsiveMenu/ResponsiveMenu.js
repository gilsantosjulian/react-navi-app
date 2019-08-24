import React from 'react';
import PropTypes from 'prop-types';
import { useStateValue, } from '../../../stateContext';
import Navlink from '../../atoms/navLink/NavLink';
import { Wrapper, } from './styled';

const ID = 'nav';

export default function ResponsiveMenu(props) {
  const { items, } = props;
  const [ { showResponsiveMenu, }, ] = useStateValue();

  return (
    showResponsiveMenu && (
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
};
