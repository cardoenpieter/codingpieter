import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MarvelSeries = (id) => {
  const [series, setSeries] = useState([]);
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
        console.log(res.data.results);
        setSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>"test"</div>;
};

export default MarvelSeries;
