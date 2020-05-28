import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenu from 'components/organisms/NavMenu/NavMenu';

const StyledWrapper = styled.div`
  margin-left: 300px;
  @media (max-width: 1110px) {
    margin: 40px 0 0 0;
  }
  @media (max-width: 825px) {
    margin: 65px 0 0 0;
  }
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <NavMenu />
    {children}
  </StyledWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
