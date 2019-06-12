import React from 'react';
import PropTypes from 'prop-types';
import Navlink from '../../atoms/navLink/NavLink';
import { Wrapper, } from './styled';

const ID = 'ul';

export default function Ul(props) {
  const { items, } = props;

  return (
    <Wrapper id={ID}>
      {items.map(item => (
        <Navlink key={`${item.title}_${item.href}`} item={item} />
      ))}
    </Wrapper>
  );
}

Ul.propTypes = {
  items: PropTypes.instanceOf(PropTypes.object).isRequired,
};
