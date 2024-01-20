import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Marvel = () => {
  const [characters, setCharacter] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=dec9cdce90864edae689b29660018520`,
      {
        method: "GET",
        params: {
          apikey: "8c4289691ab6031cb2da260892a611a11c932e35",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-general">
      <h1>CHARACTERS</h1>
      <div className="item-container grid grid-col5">
        {characters.map((character) => (
          <button onClick={() => navigate(`/series/${character.id}`)}>
            <li key={character.id}>
              <p>{character.name}</p>
              <div className="image-container">
                <img
                  src={
                    character.thumbnail.path +
                    "/standard_fantastic" +
                    "." +
                    character.thumbnail.extension
                  }
                  alt=""
                />
              </div>
            </li>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Marvel;
