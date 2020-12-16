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

    --h1-size: 4.4rem;
    --h2-size: 3.2rem;
    --normal-size: 1.6rem;
    --larger-size: 2rem;
    --bigger-size: 2.8rem;

    --normal-weight: 400;
    --bold-weight: 700;

    --primary-color: #d62020;
    --primary-alt-color: #bc1414;
    --secondary-color: #16A63E;
    --secondary-alt-color: #0e8e30;
    --white-color: #fff;
    --black-color: #161616;
    --gray-color: #4C4C4C;
}

@media screen and (min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}
`;
