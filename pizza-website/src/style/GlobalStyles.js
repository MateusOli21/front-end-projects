import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, input, button{
    font-family: 'Roboto', sans-serif;
}

body {
  font-family: -apple-system, Roboto, Ubuntu, 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
`;
