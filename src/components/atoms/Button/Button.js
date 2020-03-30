import styled from 'styled-components';

const Button = styled.button`
  min-width: 100px;
  min-height: 40px;
  font-size: 1.4rem;
  align-items: center;
  border: none;
  border-radius: 25px;
  text-transform: capitalize;
  ${({ theme, blue }) =>
    blue
      ? `color: ${theme.colors.blue}; background: ${theme.colors.blueTransparent};`
      : `color: ${theme.colors.red}; background: ${theme.colors.redTransparent};`}
`;

export default Button;
