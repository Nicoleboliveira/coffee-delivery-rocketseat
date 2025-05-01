import styled from "styled-components";

export const OrderConfirmedContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      justify-content: center;
      align-items: end;
      gap: 40px;
    }

    .container-1 {
      display: grid;

      h2 {
        font-family: "Baloo 2", sans-serif;
        line-height: 1.3;
        font-size: 32px;
        font-weight: 800;
        color: ${(props) => props.theme["yellow-dark"]};
      }
      h4 {
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 20px;
        font-weight: 400;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      .gradient-border {
        margin-top: 40px;
        padding: 1px;
        border-radius: 6px 36px 6px 36px;
        background: linear-gradient(90deg, #dbac2c, #8047f8);
        display: inline-block;
        .container-3 {
          display: grid;
          padding: 40px;
          background-color: white;
          border-radius: 6px 36px 6px 36px;

          .adress {
            display: flex;
            align-items: flex-start;
            gap: 12px;

            .icon {
              display: flex;
              justify-content: center;
              align-items: center;
              background: ${(props) => props.theme["purple"]};
              border-radius: 100px;
              padding: 8px;
            }
            .address {
              display: flex;
              flex-wrap: wrap;
              gap: 4px;
              p {
                font-family: "Roboto", sans-serif;
                line-height: 1.3;
                font-size: 16px;
                font-weight: 400;
                color: ${(props) => props.theme["base-text"]};
                margin: 0;
                display: inline;
              }
              h3 {
                font-family: "Roboto", sans-serif;
                line-height: 1.3;
                font-size: 16px;
                font-weight: 700;
                color: ${(props) => props.theme["base-text"]};
                margin: 0;
                display: inline;
              }
            }
          }
          .time {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-top: 32px;
            .icon-2 {
              display: flex;
              justify-content: center;
              align-items: center;
              background: ${(props) => props.theme["yellow"]};
              border-radius: 100px;
              padding: 8px;
            }
            .description {
              display: grid;
              p {
                font-family: "Roboto", sans-serif;
                line-height: 1.3;
                font-size: 16px;
                font-weight: 400;
                color: ${(props) => props.theme["base-text"]};
                margin: 0;
                display: inline;
              }
              h3 {
                font-family: "Roboto", sans-serif;
                line-height: 1.3;
                font-size: 16px;
                font-weight: 700;
                color: ${(props) => props.theme["base-text"]};
                margin: 0;
                display: inline;
              }
            }
          }

          .payment {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-top: 32px;
            .icon-3 {
              display: flex;
              justify-content: center;
              align-items: center;
              background: ${(props) => props.theme["yellow-dark"]};
              border-radius: 100px;
              padding: 8px;
            }
            .description {
              display: grid;
              p {
                font-family: "Roboto", sans-serif;
                line-height: 1.3;
                font-size: 16px;
                font-weight: 400;
                color: ${(props) => props.theme["base-text"]};
                margin: 0;
                display: inline;
              }
              h3 {
                font-family: "Roboto", sans-serif;
                line-height: 1.3;
                font-size: 16px;
                font-weight: 700;
                color: ${(props) => props.theme["base-text"]};
                margin: 0;
                display: inline;
              }
            }
          }
        }
      }
    }
  }
`;
