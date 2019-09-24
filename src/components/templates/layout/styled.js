import Styled from 'styled-components';
import { backgroundColor, textColor, } from '../../../config/theme';

export const Container = Styled.div`
  padding: .15em 28px;
  width: 100%;
  min-height: 40px;
  position: fixed;
  top: 0px;
  z-index: 1;
  background: white;
  opacity: ${props => (props.scrollY > 100 ? 0.9 : 1)};
  transition: opacity .3s ease-in-out;
`;

export const Main = Styled.div`
  height: 1000vh;
  padding-top: 46px;
  opacity ${props => props.opacity};
  transition: opacity .2s ease-in-out;
  
  ${({ transition, }) => transition
    && `
    margin-left: -300px;
    transition: left .2s ease-in-out;
  `}
`;

// apply theming to a styled component
export const Wrapper = Styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;
