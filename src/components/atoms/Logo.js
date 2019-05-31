import React from 'react';
import Styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const ImgContainer = Styled.div`
  display: flex;
`;

export default function Logo() {
  return (
    <ImgContainer>
      <img src={logo} style={{ height: '5vmin', }} alt="logo" />
    </ImgContainer>
  );
}
