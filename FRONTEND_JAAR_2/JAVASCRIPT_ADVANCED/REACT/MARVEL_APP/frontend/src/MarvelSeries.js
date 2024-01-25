import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Marvel from "./Marvel.js";

const MarvelSeries = () => {
  const [series, setSeries] = useState([]);
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=dec9cdce90864edae689b29660018520`,
      {
        method: "GET",
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
  }, [id]); //dependency,bij nieuwe id wordt er gererenderd
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
          </li> //in een aparte Card.js duwen
        ))}
      </div>
    </div>
  );
};

export default MarvelSeries;
