import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, input, button{
    font-family: 'Roboto', sans-serif;
}

body {
  font-family: -apple-system, 'Roboto', Ubuntu, 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

:root{
    --white-color: #fff;
    --black-color: #141414;
    --red-color: #ff4040;
    --red-darker-color: #d82d2d;
}

`

export default GlobalStyles
