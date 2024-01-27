import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Brewery = () => {
  const [breweries, setBreweries] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState("10");

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries?per_page=3`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBreweries(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChange = (event) => {
    setInput(event.target.value);
    //console.log(event.target.value);
  };

  const onPage = (event) => {
    setPage(event.target.value);
  };
  const handleClick = () => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_state=${input}&per_page=${page}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBreweries(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-general">
      <h1>Breweries around the States</h1>
      <div className="container-inputandselectfield">
        <label>
          Results:
          <select name="selectedBrewery" defaultValue={page} onChange={onPage}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </label>
        <input
          type="text"
          id="inputfieldbrewery"
          placeholder="Type a state"
          onChange={onChange}
          value={input}
        ></input>
        <button onClick={handleClick}>GO</button>
      </div>
      <div className="item-container grid grid-col5">
        {breweries.map((brewery) => (
          <button
            key={brewery.id}
            onClick={() => navigate(`/details/${brewery.id}`)}
          >
            <li>
              <p>{brewery.id}</p>
              <p>{brewery.name}</p>
              <p>{brewery.state_province}</p>
            </li>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Brewery;
