import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./App.js";

const Details = () => {
  const [planetsDetails, setPlanetsDetails] = useState([]);
  console.log("planetsdetails", planetsDetails);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log("id", id);

  const themeLightDark = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    const base_url = `http://localHost:1337/api/planets/${id}?populate=*`;
    fetch(base_url, {
      headers: {
        Authorization:
          "Bearer 847c6fac13a0954309cfac676aef71e09292951e4e33225a61b4ae04ee5e352dcd2fed03b6e0eab03fc7befb5a853d055c53ecd5d10211cbd98eecb7d1452bfc72779f29f77e418847090572debc542c768d7088f09137385314388cf38c01e987ba7cd3b9c31cf42ef60309835f9de5e2e30933043a22bcb5423ecec3225c3b",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setPlanetsDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className={themeLightDark}>
      <p className="details-title">
        Some more details about this fantastic object
      </p>
      <div className="container-details grid grid-col2">
        <div className="container-image">
          <img
            src={
              "http://localHost:1337" +
              planetsDetails.attributes?.Picture?.data[0]?.attributes?.url
            }
            alt=""
          ></img>
        </div>
        <div className="details-data">
          <p className="details-name">{planetsDetails.attributes?.name}</p>
          <div className="details-moreinfo">
            <p>Atmosphere: {planetsDetails.attributes?.atmosphere}</p>
            <p>Surface: {planetsDetails.attributes?.surface}</p>
            <p>Moon(s): {planetsDetails.attributes?.moon}</p>
            <p>Rings: {planetsDetails.attributes?.rings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;

/* EXPLANING ?. after attributes
The optional chaining operator (?.) is a feature introduced 
in ECMAScript 2020 (ES11) that simplifies the process of accessing nested properties 
or methods within an object, 
especially when dealing with potentially undefined or null values.*/
