import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import NavLinks from '../molecules/NavLinks';
import Logo from '../atoms/Logo';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Nabvar(props) {
  const { items, } = props;

  return (
    <Wrapper>
      <Logo />
      <NavLinks items={items} />
    </Wrapper>
  );
}

Nabvar.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
