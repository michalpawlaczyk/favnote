import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import LinkIcon from 'static/link.svg';

const ScaleAnimation = keyframes`
  0% { opacity: 0;}
  1% { transform: scale(0.8); opacity:1;}
  100% { transform: scale(1); opacity:1;}
`;

const StyledWrapper = styled.section`
  max-height: 330px;
  max-width: 400px;
  background: #ffffff;
  border-radius: 6px;
  padding: 18px;
  box-shadow: 0 10px 30px 0 #00000032;
  opacity: 0;
  transform: scale(0.8);
  animation: ${ScaleAnimation} 0.4s ease-in-out forwards;
  position: relative;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 3px;
  display: block;
  background: ${({ theme }) => theme.colors.blue};
`;

const StyledParagraphWrapper = styled.div`
  overflow: hidden;
  max-height: 175px;
  margin-bottom: 12px;
  line-height: 26px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

const StyledHeading = styled(Heading)`
  max-width: 85%;
  display: -webkit-inline-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const StyledLinkButton = styled.a`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.blue} url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
`;

const Card = ({ title, description, url, type, onRemoveClick, onItemClick }) => {
  const isRemovingItem = useSelector(({ itemsReducer }) => itemsReducer.isRemovingItem);
  return (
    <StyledWrapper>
      <StyledHeading as="h2" small onClick={onItemClick}>
        {title}
      </StyledHeading>
      {type !== 'notes' && <StyledLinkButton href={url} target="_blank" />}
      <StyledLine />
      <StyledParagraphWrapper onClick={onItemClick}>
        <Paragraph>{description}</Paragraph>
      </StyledParagraphWrapper>
      <Button onClick={onRemoveClick}>
        {isRemovingItem ? <LoadingAnimation red /> : 'Remove'}
      </Button>
    </StyledWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
};

Card.defaultProps = {
  title: '',
  url: '#',
  type: 'notes',
  onItemClick: null,
};

export default Card;
