import styled from "styled-components";

export const IntroContainer = styled.header`
  display: flex;
  gap: 30px;
  span {
    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-family: "Baloo 2", sans-serif;
      line-height: 1.25;
      font-size: 40px;
    }

    p {
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
      font-size: 18px;
      font-weight: regular;
      margin-top: 16px;
    }

    main {
      display: flex;
      margin-top: 45px;
      gap: 40px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px;
          border-radius: 100%;
        }

        .cart {
          background: ${(props) => props.theme["yellow-dark"]};
        }

        .timer {
          background: ${(props) => props.theme["yellow"]};
        }

        .package {
          background: ${(props) => props.theme["base-text"]};
        }

        .coffee {
          background: ${(props) => props.theme["purple"]};
        }
      }
    }
  }
`;
