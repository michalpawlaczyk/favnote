import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledButton = styled.button`
  background: transparent;
  border: none;
  height: 50px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0;
`;

const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${({ active, theme }) => (active ? `color: ${theme.colors.blue}` : null)};
  margin: 0;
`;

const StyledImage = styled.div`
  max-height: 24px;
  padding: 0 12px 0 35px;
  stroke: #000000;
`;

const StyledActiveLine = styled.div`
  position: absolute;
  display: inline-block;
  width: 3px;
  height: 40px;
  border-left: 3px solid ${({ theme }) => theme.colors.blue};
  box-shadow: 4px 0px 25px rgba(42, 139, 242, 0.75), 0px 0px 10px rgba(42, 139, 242, 0.55),
    1px 0px 10px rgba(42, 139, 242, 0.45);
  border-radius: 3px;
`;

const NavButton = ({ active, icon: Icon, children }) => (
  <StyledButton>
    {active && <StyledActiveLine />}
    <StyledImage>{active ? <Icon stroke="#2a8bf2" /> : <Icon />}</StyledImage>
    <StyledParagraph active={active}>{children}</StyledParagraph>
  </StyledButton>
);

NavButton.propTypes = {
  icon: PropTypes.instanceOf(Object).isRequired,
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

NavButton.defaultProps = {
  active: false,
};

export default NavButton;
