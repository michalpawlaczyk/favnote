import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.grey};
`;

export default Paragraph;
