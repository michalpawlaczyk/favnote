import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenu from 'components/organisms/NavMenu/NavMenu';

const StyledWrapper = styled.div`
  margin-left: 300px;
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
