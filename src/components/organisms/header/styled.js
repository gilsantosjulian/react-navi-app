import Styled from 'styled-components';
import { device, } from '../../../config/device';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.tablet} {  
  }
`;
