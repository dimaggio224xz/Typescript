import styled from 'styled-components';

export const MainPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  padding: 80px 0 50px;
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  hr {
    width: 200px;
    background-color: #000000;
    margin-bottom: 60px;
  }

  button {
    color: #ffffff;
    background-color: #b841fc;
    border: none;
    border-radius: 8px;
    padding: 14px 30px;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: -1px 3px 15px 6px rgba(34, 60, 80, 0.2);
  }
`;
