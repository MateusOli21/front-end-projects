import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, input, button{
    font-family: "Poppins", 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

:root{
    font-size: 60%;
}


@media screen and (min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}

`;
