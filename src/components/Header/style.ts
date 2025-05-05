import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  margin-bottom: 32px;
  position: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgb(250, 250, 250, 0.8);
  align-items: center;
  padding: 32px 160px 25px;
  box-sizing: border-box;

  div {
    display: flex;
    gap: 12px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme["purple-light"]};
      border-radius: 6px;
      padding: 8px;
      color: ${(props) => props.theme["purple-dark"]};

      font-size: 15px;
      line-height: 130%;
      font-weight: regular;
      gap: 4px;
    }

    nav {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 12px 11px 12px;
      border-radius: 6px;
      background: ${(props) => props.theme["yellow-light"]};
      position: relative;

      h3 {
        background: ${(props) => props.theme["yellow-dark"]};
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme["white"]};
        font-size: 14px;
        width: 22px;
        height: 22px;
        position: absolute;
        top: -8px;
        right: -8px;
      }
    }
  }
`;
