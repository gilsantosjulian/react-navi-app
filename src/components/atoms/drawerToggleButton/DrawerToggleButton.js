import React from 'react';
import { useStateValue, } from '../../../stateContext';
import { ToogleButton, ToogleButtonLine, } from './styled';

export default function DrawerToogeButton() {
  const [ { opacity, }, dispatch, ] = useStateValue();
  console.log(opacity);

  const onChange = () => dispatch({
    type: 'showResponsiveMenu',
  });

  return (
    <ToogleButton onClick={onChange}>
      <ToogleButtonLine />
      <ToogleButtonLine />
      <ToogleButtonLine />
    </ToogleButton>
  );
}
