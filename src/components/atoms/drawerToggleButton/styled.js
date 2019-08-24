import Styled from 'styled-components';
import { device, size, } from '../../../config/device';

export const ToogleButtonLine = Styled.span`
  transition: all 0.3s ease-in-out;
  display: block;
  text-decoration: none;
  width: 25px;
  height: 5px;
  border-bottom: 2px solid;
  overflow: hidden;
`;

export const ToogleButton = Styled.div`
  position: relative;
  display: none;
  right: 45px;
  margin-top: -10px;
  z-index: 1;
  transform: translateY(40%);
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }

  ${({ close, }) => close
    && `
    ${ToogleButtonLine}:nth-child(1) {
      transform: translateX(4px) translateY(7px) rotate(45deg);
    }

    ${ToogleButtonLine}:nth-child(2) {
      opacity: 0;
    }

    ${ToogleButtonLine}:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}

  @media (min-width: ${size.tablet}) {  
    right: 7%;
  }

  @media ${device.tablet} {  
    display: block;
  }

`;
