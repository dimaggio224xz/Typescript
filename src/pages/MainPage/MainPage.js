import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={url}>
          <button>{title}</button>
        </Link>
      ))}
    </MainPageStyled>
  );
};
