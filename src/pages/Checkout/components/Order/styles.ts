import styled from "styled-components";

export const OrderContainer = styled.header`
  .content {
    display: grid;

    h2 {
      font-family: "Baloo 2", sans-serif;
      line-height: 1.3;
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .orderProducts {
      display: grid;
      background: ${(props) => props.theme["base-card"]};
      border-radius: 6px 44px 6px 44px;
      padding: 8px 40px 40px;
      margin-top: 15px;
      .products {
        display: grid;
        grid-template-columns: 1fr 4fr 2fr;
        margin-top: 32px;
        gap: 20px;
        border-bottom: 1px solid ${(props) => props.theme["base-button"]};

        img {
          width: 64px;
          height: auto;
        }
        .description {
          display: grid;
          flex-direction: column;
          h3 {
            font-family: "Roboto", sans-serif;
            line-height: 1.3;
            font-size: 16px;
            font-weight: 470;
            color: ${(props) => props.theme["base-subtitle"]};
          }
          button {
            all: unset;
            cursor: pointer;
          }

          .buttons {
            display: flex;
            gap: 8px;
            margin-top: 8px;
            margin-bottom: 33.5px;

            .btn-1 {
              background-color: ${(props) => props.theme["base-button"]};
              padding: 5px 11px;
              gap: 7px;
              border-radius: 6px;
              font-family: "Roboto", sans-serif;
              font-size: 16px;
              line-height: 1.3;
              color: ${(props) => props.theme["base-title"]};
              display: flex;
              align-items: center;
            }
            .minus svg,
            .plus svg {
              color: ${(props) => props.theme["purple"]};
              transition: color 0.3s;
              display: flex;
              margin-top: -2px;
            }

            .minus:hover svg,
            .plus:hover svg {
              color: ${(props) => props.theme["purple-dark"]};
            }

            .btn-2 {
              background-color: ${(props) => props.theme["base-button"]};
              padding: 8px;
              font-family: "Roboto", sans-serif;
              font-size: 12px;
              line-height: 1.6;
              color: ${(props) => props.theme["base-text"]};
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .trash {
              display: flex;
              align-items: flex-end;
              justify-content: center;
              gap: 2px;
            }
            .trash svg {
              color: ${(props) => props.theme["purple"]};
              margin-bottom: 2.5px;
            }
          }
        }
        .price {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          line-height: 1.3;
          font-weight: bold;
          color: ${(props) => props.theme["base-text"]};
          display: flex;
        }
      }

      .container {
        margin-top: 12px;

        .information {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          p {
            font-family: "Roboto", sans-serif;
            font-size: 14px;
            line-height: 1.3;
            font-weight: 450;
            color: ${(props) => props.theme["base-text"]};
          }

          h5 {
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            line-height: 1.3;
            font-weight: 400;
            color: ${(props) => props.theme["base-text"]};
          }
        }

        .total {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          h4 {
            font-family: "Roboto", sans-serif;
            font-size: 20px;
            line-height: 1.3;
            font-weight: bold;
            color: ${(props) => props.theme["base-text"]};
          }
        }
      }
      .confirm {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        background-color: ${(props) => props.theme["yellow"]};
        padding: 12px;
        border-radius: 6px;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        line-height: 1.3;
        font-weight: bold;
        color: ${(props) => props.theme["white"]};
      }

      .confirm:hover {
        background-color: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }
`;
