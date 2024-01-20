import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MarvelSeries = () => {
  const [series, setSeries] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=dec9cdce90864edae689b29660018520`,
      {
        method: "GET",
        params: {
          apikey: "8c4289691ab6031cb2da260892a611a11c932e35",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("dataSerie", res.data.results);
        setSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="container-general">
      <h1>SERIES</h1>
      <div className="item-container grid grid-col5">
        {series.map((serie) => (
          <li key={serie.id}>
            <p>{serie.title}</p>
            <img
              src={
                serie.thumbnail.path +
                "/standard_fantastic" +
                "." +
                serie.thumbnail.extension
              }
              alt=""
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default MarvelSeries;
