import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-label"]};
    -webkit-font-smoothing: antialiased;
}
`;
