import Styled from 'styled-components';
import { backgroundColor, textColor, } from '../../../config/theme';

export const Header = Styled.div`
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
`;

// apply theming to a styled component
export const Wrapper = Styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;
