import Planets from "./Planets.js";
import Details from "./Details.js";
import ButtonLightDarkMode from "./ButtonLightDarkMode.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import "./Reset.css";
import "./App.css";

const ThemeContext = createContext("light"); //hoeft niet perse een defaultwaarde te zijn
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ButtonLightDarkMode
          onClick={() => {
            console.log(theme);
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        ></ButtonLightDarkMode>

        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Planets />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
