import Planets from "./Planets.js";
import Details from "./Details.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Reset.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
API TOKEN PLANETS
847c6fac13a0954309cfac676aef71e09292951e4e33225a61b4ae04ee5e352dcd2fed03b6e0eab03fc7befb5a853d055c53ecd5d10211cbd98eecb7d1452bfc72779f29f77e418847090572debc542c768d7088f09137385314388cf38c01e987ba7cd3b9c31cf42ef60309835f9de5e2e30933043a22bcb5423ecec3225c3b
*/
