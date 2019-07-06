import Styled from 'styled-components';
import { size, } from '../../../config/device';

export const Wrapper = Styled.nav`
  display: flex;
  align-items: center;
  margin-right: 30px;
  
  @media (min-width: ${size.tablet}) {  
    display: none;
  }
`;
