import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brewery from "./Brewery.js";
import BreweryDetails from "./BreweryDetails.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Brewery />} />
          <Route path="/details/:id" element={<BreweryDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); //:id dynamic routing
}

export default App;
