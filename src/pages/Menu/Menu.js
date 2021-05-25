import React from 'react';
import { MenuStyled, Hamburger } from './Menu.styled';
import { useLocation } from 'react-router-dom';
import { RouteLink } from '@root-routing';
import { ROOT_CONSTANTS } from '@root-constants';

export const Menu = ({ isMenuShow, setMenuShow }) => {
  const { pathname } = useLocation();

  return (
    <>
      <MenuStyled active={isMenuShow}>
        {pathname === ROOT_CONSTANTS.HOME.link ? null : (
          <RouteLink to={ROOT_CONSTANTS.HOME.link}>{ROOT_CONSTANTS.HOME.title}</RouteLink>
        )}
      </MenuStyled>
      <Hamburger active={isMenuShow} onClick={() => setMenuShow(!isMenuShow)}>
        <span></span>
      </Hamburger>
    </>
  );
};
