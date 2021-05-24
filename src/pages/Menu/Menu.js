import React, { useState } from 'react';
import { MenuStyled, Hamburger } from './Menu.styled';

export const Menu = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <MenuStyled active={isShow}>asjdfhgbhmrefmhersmhfmjh</MenuStyled>
      <Hamburger active={isShow} onClick={() => setIsShow(!isShow)}>
        <span></span>
      </Hamburger>
    </>
  );
};
