import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blackColor: "#131313",
    blackAltColor: "#393939",
    whiteColor: "#fff",
    grayColor: "#707070",
    primaryColor: "#069C54",
    primaryAltColor: "#048654",
    bodyColor: "#FBFEFD",
  },
  fontSizes: {
    small: "1.4rem",
    normal: "1.6rem",
    large: "2rem",
    h1: "5.6rem",
    h2: "4.8rem",
    h3: "3.6rem",
  },
  fontWeights: {
    light: "100",
    normal: "400",
    bold: "700",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
