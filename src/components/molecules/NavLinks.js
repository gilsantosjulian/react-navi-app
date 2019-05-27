import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Navlink from '../atoms/NavLink';

const Wrapper = Styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 30px;
`;

export default function Navlinks(props) {
  const { items, } = props;

  return (
    <Wrapper>
      {items.map(item => (
        <Navlink item={item} />
      ))}
    </Wrapper>
  );
}

Navlinks.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
