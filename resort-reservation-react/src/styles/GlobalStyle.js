import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primaryColor: #bfa75f;
  --mainWhite: #fff;
  --offWhite: #f7f7f7;
  --mainBlack: #222;
  --opacityBlack: rgba(0,0,0,0.5);
  --mainGrey: #ececec;
  --darkGrey: #cfcfcf;
  --mainTransition: all 0.3s linear;
  --lightShadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.3);
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  --mainSpacing: 3px;
  --mainSpacing: 2px;
}

body {
  color: var(--mainBlack);
  background: var(--mainWhite);
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4;
}

a{
  text-decoration: none;
}


h1,h2,h3,h4,h5{
  font-family: 'Francois One', sans-serif;
}

.btn-primary{
  display: block;
  text-align: center;
  width: 100%;
  max-width: 280px;
  padding: 0.65rem 1rem;
  border: 2px solid var(--primaryColor);
  border-radius: 5px;
  background: var(--primaryColor);
  color: var(--mainWhite);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: var(--mainTransition);
  cursor: pointer;
  
  &:hover{
    background: transparent;
    color: var(--primaryColor);
  }
}

`;
