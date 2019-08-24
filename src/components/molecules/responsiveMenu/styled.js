import Styled from 'styled-components';
import { size, } from '../../../config/device';

export const Wrapper = Styled.nav`
  transition: all .2s ease-in-out;
  height: 100%;
  width: 200px;
  padding: 50px 25px 20px;
  background-color: #f4f4f4;
  color: #000;
  display: block;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  z-index: -1;
  text-align: left;
  right: 0;
  
  @media (min-width: ${size.tablet}) {  
    display: none;
  }
`;
