import styled from 'styled-components';

export const MenuStyled = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 20px 0 90px;
  left: 0;
  color: white;
  background-color: #000000;
  top: ${({ active }) => (active ? '0px' : '-70px')};
  transition-duration: 0.2s;
  border-radius: 0 0 24px 24px;
`;

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 14px;
  left: 30px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #ffffff;
  border: 2px solid #000000;
  cursor: pointer;
  transition-duration: 0.2s;
  z-index: 2000;

  &:hover {
    background-color: #b841fc;
    border-color: #b841fc;
  }

  span {
    display: block;
    position: relative;
    width: 24px;
    height: 2px;
    background-color: #000000;
    transition-duration: 0.2s;
    transform: ${({ active }) => (active ? 'rotate(45deg)' : '')};
  }
  span:before {
    content: '';
    display: ${({ active }) => (active ? 'none' : 'block')};
    position: relative;
    width: 24px;
    height: 2px;
    background-color: #000000;
    top: ${({ active }) => (active ? '0px' : '-7px')};
    transition-duration: 0.2s;
  }
  span:after {
    content: '';
    display: block;
    position: relative;
    width: 24px;
    height: 2px;
    background-color: #000000;
    top: ${({ active }) => (active ? '0px' : '5px')};
    transition-duration: 0.2s;
    transform: ${({ active }) => (active ? 'rotate(-90deg)' : '')};
  }

  &:hover span {
    background-color: #ffffff;
  }
  &:hover span:before {
    background-color: #ffffff;
  }
  &:hover span:after {
    background-color: #ffffff;
  }
`;
