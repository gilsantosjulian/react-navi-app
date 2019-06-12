import Styled from 'styled-components';

export const NavLink = Styled.li`
  display: flex;
  max-width: 100%;
  height: 50%;
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
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
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
`;

export const styles = {
  anchor: {
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
