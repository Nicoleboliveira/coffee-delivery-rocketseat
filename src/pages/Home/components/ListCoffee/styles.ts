import styled from "styled-components";

export const ListCoffeContainer = styled.header`
  display: flex;
  justify-content: center;

  span {
    margin-bottom: 157px;

    h2 {
      font-family: "Baloo 2", sans-serif;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
      font-weight: 800;
      font-size: 32px;
    }

    div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;

      .card {
        background: ${(props) => props.theme["base-card"]};
        height: auto;
        border-top-left-radius: 6px;
        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;
        border-bottom-right-radius: 6px;
        margin-top: 54px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        text-align: center;
        opacity: 100%;
        gap: 12px;

        img {
          width: 120px;
          height: auto;
          margin-top: -40px;
        }

        .tags {
          gap: 4px;
          h5 {
            background: ${(props) => props.theme["yellow-light"]};
            padding: 4px 8px;
            border-radius: 100px;
            font-family: "Roboto", sans-serif;
            color: ${(props) => props.theme["yellow-dark"]};
            font-size: 10px;
            line-height: 1.3;
            font-weight: bold;
          }
        }

        h4 {
          font-family: "Baloo 2", sans-serif;
          font-size: 20px;
          font-weight: bold;
          line-height: 1.3;
          color: ${(props) => props.theme["base-subtitle"]};
          margin-top: 2px;
        }

        p {
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          line-height: 1.3;
          color: ${(props) => props.theme["base-label"]};
          margin-top: -4px;
          margin-bottom: 15px;
        }

        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: auto;
          gap: 23px;

          .price {
            gap: 2px;
            display: flex;
            align-items: baseline;
            h6 {
              font-family: "Roboto", sans-serif;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.3;
              color: ${(props) => props.theme["base-text"]};
              opacity: 100%;
            }
            h3 {
              font-family: "Baloo 2", sans-serif;
              font-size: 24px;
              line-height: 1.3;
              color: ${(props) => props.theme["base-text"]};
              opacity: 100%;
            }
          }

          button {
            all: unset; /* remove tudo */
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .buttons {
            gap: 8px;
            display: flex;
            align-items: center;
          }

          .btn-1 {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${(props) => props.theme["base-button"]};
            padding: 8px;
            gap: 4px;
            border-radius: 6px;
            height: auto;
          }
          .minus,
          .plus {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .btn-1 span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            line-height: 1.3;
            color: ${(props) => props.theme["base-title"]};
            padding: 0;
            margin: 0;
          }

          .minus svg,
          .plus svg {
            color: ${(props) => props.theme["purple"]};
            transition: color 0.3s;
            display: flex;
            align-items: center;
          }

          .minus:hover svg,
          .plus:hover svg {
            color: ${(props) => props.theme["purple-dark"]};
          }

          .btn-2 {
            background-color: ${(props) => props.theme["purple-dark"]};
            padding: 8px;
            border-radius: 6px;
            transition: color 0.3s;
          }

          .btn-2:hover {
            background-color: ${(props) => props.theme["purple"]};
            opacity: 100%;
          }
        }
      }
    }
  }
`;
