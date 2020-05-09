import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from 'actions/actionsUser';
import NavButton from 'components/atoms/NavButton/NavButton';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ReactComponent as NoteSvg } from 'static/note.svg';
import { ReactComponent as TwitterSvg } from 'static/twitter.svg';
import { ReactComponent as LogoutSvg } from 'static/power.svg';
import { ReactComponent as ArticleSvg } from 'static/article.svg';
import Avatar from 'static/avatar.svg';
import { routes } from 'routes/routes';

const StyledWrapper = styled.section`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 200px 1fr 80px;
  min-height: 100vh;
  width: 100%;
  max-width: 300px;
  box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05), 14.0351px 0px 25px rgba(86, 128, 248, 0.03);
`;

const StyledUserWrapper = styled.div`
  margin: 40px auto 10px;
`;

const StyledNavButtonsWrapper = styled.div``;

const StyledParagraph = styled(Paragraph)`
  color: #000000;
`;

const StyledImage = styled.img`
  display: block;
  width: 96px;
  margin: 0 auto;
`;

const NavMenu = ({ avatar }) => {
  const emailAdrress = useSelector(({ userReducer }) => userReducer.email);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <StyledWrapper>
      <StyledUserWrapper>
        <StyledImage src={avatar} alt="user avatar." />
        <StyledParagraph>{emailAdrress}</StyledParagraph>
      </StyledUserWrapper>
      <StyledNavButtonsWrapper>
        <NavButton as={NavLink} to={routes.notes} icon={NoteSvg}>
          Notes
        </NavButton>
        <NavButton as={NavLink} to={routes.articles} icon={ArticleSvg}>
          Articles
        </NavButton>
        <NavButton as={NavLink} to={routes.twitters} icon={TwitterSvg}>
          Twitters
        </NavButton>
      </StyledNavButtonsWrapper>
      <NavButton icon={LogoutSvg} onClick={handleLogout}>
        Log out
      </NavButton>
    </StyledWrapper>
  );
};
NavMenu.propTypes = {
  avatar: PropTypes.string,
};

NavMenu.defaultProps = {
  avatar: Avatar,
};

export default NavMenu;
