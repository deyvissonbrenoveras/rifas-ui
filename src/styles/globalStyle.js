import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100vh
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body, input, button, textarea, select {
        font: 14px 'Roboto', sans-serif;
    }
    *:focus {
        outline: 0;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
    li {
        list-style: none;
    }
`;

export default GlobalStyle;
