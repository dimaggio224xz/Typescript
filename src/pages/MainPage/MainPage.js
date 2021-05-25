import React from 'react';
import { RouteLink } from '@root-routing';
import { ROOT_CONSTANTS } from '@root-constants';
import { MainPageStyled } from './MainPage.styled';

const appList = [
  { title: ROOT_CONSTANTS.COMPOUND_INTEREST.title, url: ROOT_CONSTANTS.COMPOUND_INTEREST.link },
];

export const MainPage = () => {
  return (
    <MainPageStyled>
      <h1>Akulov Dmitry</h1>
      <hr />
      {appList.map(({ title, url }) => (
        <RouteLink to={url}>
          <button>{title}</button>
        </RouteLink>
      ))}
    </MainPageStyled>
  );
};
