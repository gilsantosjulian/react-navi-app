import React, { useState, } from 'react';
import { useStateValue, } from '../../../stateContext';
import { ToogleButton, ToogleButtonLine, } from './styled';

export default function DrawerToogeButton() {
  const [ { opacity, }, dispatch, ] = useStateValue();
  const [ pressed, setPressed, ] = useState(false);
  console.log(opacity);

  const onChange = () => {
    setPressed(!pressed);
    return dispatch({
      type: 'showResponsiveMenu',
    });
  };

  return (
    <ToogleButton onClick={onChange} close={pressed}>
      <ToogleButtonLine />
      <ToogleButtonLine />
      <ToogleButtonLine />
    </ToogleButton>
  );
}
