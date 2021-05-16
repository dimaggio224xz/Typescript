import React from 'react';
import { Link } from 'react-router-dom';
import { ROOT_CONSTANTS } from '@root-constants';
import { MainPageStyled } from './MainPageStyled';

const appList = [{ title: 'Compound interest', url: ROOT_CONSTANTS.COMPOUND_INTEREST }];

export const MainPage = () => {
  return (
    <MainPageStyled>
      {appList.map(({ title, url }) => (
        <Link to={url}>
          <button>{title}</button>
        </Link>
      ))}
    </MainPageStyled>
  );
};
