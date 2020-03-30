import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: #0d1c2e;
  padding-left: 0.3em;
`;

export default Heading;
