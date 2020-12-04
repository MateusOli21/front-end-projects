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
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

:root{
    font-size: 60%;

    --h1-size: 3.2rem;
    --normal-size: 1.6rem;
    --larger-size: 2.2rem;
    --bigger-size: 2.8rem;

    --normal-weight: 400;
    --bold-weight: 700;

    --primary-color: #EA4C4C;
    --primary-alt-color: #C14545;
    --secondary-color: #0E2431;
    --white-color: #fff;
    --black-color: #131313;
}

@media screen and (min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}
`;
