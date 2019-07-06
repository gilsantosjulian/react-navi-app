import Styled from 'styled-components';
import { device, size, } from '../../../config/device';

export const ToogleButton = Styled.div`
  position: relative;
  display: none;
  right: 13%;
  margin-top: -10px;
  z-index: 1999;
  transform: translateY(40%);
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }

  @media (min-width: ${size.tablet}) {  
    right: 7%;
  }

  @media ${device.tablet} {  
    display: block;
  }

`;

export const ToogleButtonLine = Styled.div`
  display: block;
  text-decoration: none;
  width: 25px;
  height: 5px;
  border-bottom: 2px solid;
  overflow: hidden;
`;
