import React, { useState, } from 'react';
import { useStateValue, } from '../../../stateContext';
import { ToogleButton, ToogleButtonLine, } from './styled';

export default function DrawerToogeButton() {
  // eslint-disable-next-line no-empty-pattern
  const [ {}, dispatch, ] = useStateValue();
  const [ pressed, setPressed, ] = useState(false);

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
