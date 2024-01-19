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
    <div className="item-container grid grid-col4">
      {characters.map((character) => (
        <li key={character.id}>
          <button onClick={() => navigate(`/series/${character.id}`)}>
            {character.name}
          </button>

          <img
            src={
              character.thumbnail.path +
              "/standard_fantastic" +
              "." +
              character.thumbnail.extension
            }
            alt=""
          />
        </li>
      ))}
    </div>
  );
};
export default Marvel;
