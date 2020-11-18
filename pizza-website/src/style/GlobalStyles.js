import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, input, button{
    font-family: 'Kanit', sans-serif;
}

body {
  font-family: -apple-system, Kanit, Ubuntu, 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

:root{
  --white-color: #fff;
  --black-color: #000;
  --yellow-base-color: #e9ba23;
  --yellow-light-color : #ffc500;
  --red-base-color: #e31837;
}
`;
