import { createGlobalStyle } from "styled-components"

import imagesPageBg from "../../images/background.jpg"
import destinationsPageBg from "../../images/background2.jpg"

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

.images-page, .destinations-page{
    width: 100%;
    height: 100vh;
    margin-top: -80px;

    display: flex;
    align-items: center;
    justify-content: center;

    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);

    h1{
        color: var(--white-color);
        font-size: clamp(50px, 60px, 80px);
    }
}

.images-page{
    background: url(${imagesPageBg}) center center/cover no-repeat;
}

.destinations-page{
    background: url(${destinationsPageBg}) center center/cover no-repeat;
}
:root{
    --white-color: #fff;
    --black-color: #141414;
    --red-color: #ff4040;
    --red-darker-color: #d82d2d;
}

`

export default GlobalStyles
