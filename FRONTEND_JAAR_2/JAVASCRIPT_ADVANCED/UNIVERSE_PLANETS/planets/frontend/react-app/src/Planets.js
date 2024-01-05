import { useState, useEffect } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = () => {
    const base_url = `http://localHost:1337/api/planets?populate=*`;
    fetch(base_url, {
      headers: {
        Authorization:
          "Bearer 847c6fac13a0954309cfac676aef71e09292951e4e33225a61b4ae04ee5e352dcd2fed03b6e0eab03fc7befb5a853d055c53ecd5d10211cbd98eecb7d1452bfc72779f29f77e418847090572debc542c768d7088f09137385314388cf38c01e987ba7cd3b9c31cf42ef60309835f9de5e2e30933043a22bcb5423ecec3225c3b",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPlanets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Planets in our Solar System</h1>
      <div className="item-container">
        {planets.map((planet) => (
          <div className="card" key={planet.id}>
            <img
              src={
                "http://localHost:1337" +
                planet.attributes.Picture.data[0].attributes.url
              }
              alt=""
            />
            <h3>{planet.attributes.name}</h3>
            <p>Radius: {planet.attributes.radius} km</p>
            <p>
              Distance from our Sun: {planet.attributes.distance_from_sun} km
            </p>
            <p>Mean temperature: {planet.attributes.mean_temperature} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
