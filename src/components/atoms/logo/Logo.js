import React from 'react';
import { ImgContainer, } from './styled';
import logo from '../../../assets/images/logo.svg';

const ID = 'logo';

export default function Logo() {
  return (
    <ImgContainer id={ID}>
      <img src={logo} style={{ height: '40px', }} alt="logo" />
    </ImgContainer>
  );
}
