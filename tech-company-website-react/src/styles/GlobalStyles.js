import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, input, button{
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
}


:root{
    font-size: 60%;

    --black-color: #131313;
    --white-color: #fff;
    --red-color: #ff0844;
    --salmon-color: #ffb199;
    --orange-color: #ff7062;
}


@media screen and (min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}
`;
