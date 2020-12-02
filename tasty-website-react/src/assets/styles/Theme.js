import { ThemeProvider } from "styled-components";

const Theme = ({ children, currentTheme }) => (
  <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
);

export default Theme;
