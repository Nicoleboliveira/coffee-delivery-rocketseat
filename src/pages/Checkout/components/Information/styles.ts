import styled from "styled-components";

export const InformationContainer = styled.header`
  span {
    display: grid;

    h2 {
      font-family: "Baloo 2", sans-serif;
      line-height: 1.3;
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .address {
      display: grid;
      background: ${(props) => props.theme["base-card"]};
      border-radius: 6px;
      padding: 40px;
      margin-top: 15px;

      .intro-1 {
        display: flex;
        align-items: flex-start;
        gap: 8px;

        div {
          h3 {
            font-family: "Roboto", sans-serif;
            line-height: 1.3;
            font-size: 16px;
            font-weight: 470;
            color: ${(props) => props.theme["base-subtitle"]};
          }
          p {
            font-family: "Roboto", sans-serif;
            line-height: 1.3;
            font-size: 14px;
            font-weight: 400;
            color: ${(props) => props.theme["base-text"]};
          }
        }
      }
      input:focus {
        border: 1px solid ${(props) => props.theme["yellow-dark"]};
      }

      .cep {
        all: unset;
        background-color: ${(props) => props.theme["base-input"]};
        border: 1px solid ${(props) => props.theme["base-button"]};
        border-radius: 4px;
        margin-top: 32px;
        width: 200px;
        padding: 10px;
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 14px;
        font-weight: 400;
        color: ${(props) => props.theme["base-label"]};
      }

      .road {
        all: unset;
        background-color: ${(props) => props.theme["base-input"]};
        border: 1px solid ${(props) => props.theme["base-button"]};
        border-radius: 4px;
        margin-top: 16px;
        padding: 10px;
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 14px;
        font-weight: 400;
        color: ${(props) => props.theme["base-label"]};
      }

      .line-1 {
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-top: 16px;
        gap: 12px;

        input {
          all: unset;
          background-color: ${(props) => props.theme["base-input"]};
          border: 1px solid ${(props) => props.theme["base-button"]};
          border-radius: 4px;
          margin-top: 16px;
          padding: 10px;
          font-family: "Roboto", sans-serif;
          line-height: 1.3;
          font-size: 14px;
          font-weight: 400;
          color: ${(props) => props.theme["base-label"]};
        }
        input:focus {
          border: 1px solid ${(props) => props.theme["yellow-dark"]};
        }
      }

      .line-2 {
        display: grid;
        grid-template-columns: 2fr 3fr 60px;
        margin-top: 16px;
        gap: 12px;

        input {
          all: unset;
          background-color: ${(props) => props.theme["base-input"]};
          border: 1px solid ${(props) => props.theme["base-button"]};
          border-radius: 4px;
          margin-top: 16px;
          padding: 10px;
          font-family: "Roboto", sans-serif;
          line-height: 1.3;
          font-size: 14px;
          font-weight: 400;
          color: ${(props) => props.theme["base-label"]};
        }
        input:focus {
          border: 1px solid ${(props) => props.theme["yellow-dark"]};
        }
      }
    }

    .payment {
      display: grid;
      background: ${(props) => props.theme["base-card"]};
      border-radius: 6px;
      padding: 40px;
      margin-top: 12px;

      .intro-2 {
        display: flex;
        align-items: flex-start;
        gap: 8px;

        div {
          h3 {
            font-family: "Roboto", sans-serif;
            line-height: 1.3;
            font-size: 16px;
            font-weight: 470;
            color: ${(props) => props.theme["base-subtitle"]};
          }
          p {
            font-family: "Roboto", sans-serif;
            line-height: 1.3;
            font-size: 14px;
            font-weight: 400;
            color: ${(props) => props.theme["base-text"]};
          }
        }
      }

      .payment-options {
        display: grid;
        grid-template-columns: auto auto 1fr;
        margin-top: 32px;
        gap: 12px;

        label {
          all: unset;
          background-color: ${(props) => props.theme["base-button"]};
          padding: 16px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: "Roboto", sans-serif;
          line-height: 1.3;
          font-size: 12px;
          font-weight: 400;
          color: ${(props) => props.theme["base-text"]};
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        input:hover + label {
          background-color: ${(props) => props.theme["base-hover"]};
          color: ${(props) => props.theme["base-subtitle"]};
        }
        input:checked + label {
          border: 1px solid ${(props) => props.theme["purple"]};
          background-color: ${(props) => props.theme["purple-light"]};
        }
      }
    }
  }
`;
