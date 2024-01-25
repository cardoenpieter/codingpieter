import "./Reset.css";
import "./App.css";
import Marvel from "./Marvel.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarvelSeries from "./MarvelSeries.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Marvel />} />
          <Route path="/series/:id" element={<MarvelSeries />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); //:id dynamic routing
}

export default App;
