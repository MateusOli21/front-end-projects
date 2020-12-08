import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, input, button{
    font-family: "Encode Sans", 'Open Sans', sans-serif;
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
    --black-color: #131313;
    --white-color: #fff;
    --primary-color: #04c273;
    --primary-alt-color: #01a35f;
    --secondary-color: #151d30;
    --secondary-alt-color: #101624;

    font-size: 60%;
}


@media screen and (min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}
`;
