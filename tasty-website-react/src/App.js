import { useState } from "react";

import GlobalStyles from "./assets/styles/GlobalStyles";
import Theme from "./assets/styles/Theme";
import dark from "./assets/styles/themes/dark";
import light from "./assets/styles/themes/light";

import Navbar from "./components/Navbar";

function App() {
  const [currentTheme, setCurrentTheme] = useState(light);

  const toggleCurrentTheme = () =>
    setCurrentTheme(currentTheme.title === "light" ? dark : light);

  console.log(light);

  return (
    <>
      <Theme currentTheme={currentTheme}>
        <GlobalStyles />
        <Navbar toggleCurrentTheme={toggleCurrentTheme} />
      </Theme>
    </>
  );
}

export default App;
