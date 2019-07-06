import React from 'react';
import PropTypes from 'prop-types';
import { ToogleButton, ToogleButtonLine, } from './styled';

export default function DrawerToogeButton(props) {
  const { onChange, } = props;
  return (
    <ToogleButton onClick={() => onChange(true)}>
      <ToogleButtonLine />
      <ToogleButtonLine />
      <ToogleButtonLine />
    </ToogleButton>
  );
}

DrawerToogeButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};
