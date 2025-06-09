import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --shadow: 2px 4px 16px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, select, input {
    font-family: "Nunito Sans", sans-serif;
  }
`;

export default GlobalStyle;
