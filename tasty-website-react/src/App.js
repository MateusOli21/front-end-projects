import GlobalStyles from "./assets/styles/GlobalStyles";
import Theme from "./assets/styles/Theme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Navbar />
      </Theme>
    </>
  );
}

export default App;
