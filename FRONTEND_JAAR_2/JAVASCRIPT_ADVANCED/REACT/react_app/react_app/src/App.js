import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <ul>Joke of the day:</ul>
      <button>
        <li>
          {categories.map((categorie) => {
            return categorie;
          })}
        </li>
      </button>
    </div>
  );
}

export default App;
