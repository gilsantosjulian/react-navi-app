import Styled from 'styled-components';
import { device, } from '../../../config/device';

export const NavLink = Styled.li`
  display: flex;
  max-width: 100%;
  height: 5%;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  flex-direction: column;
  justify-content: center;
  font-family: Foundry;
  outline: none;
  margin: 0px;
  padding: 6px;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  .active span {
    transform: scale(0.95);
    opacity: 0.6;
    color: ${props => props.theme.colors.secondary};
  }

  @media ${device.tablet} {  
    float: none;
    display: block;
    border: 0;
    background: 0;
    padding: 0;
    margin: 0;
    clear: both;
    width: 100 % ;
  }
`;

export const Span = Styled.span`
  font-family: Open Sans;
  font-weight: 300;
  font-size: 16px;
  padding: .6em;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media ${device.tablet} {  
    padding: .6em 0;
  }
`;

export const styles = {
  anchor: {
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
