import Image from "react-image-enlarger";
import { useState } from "react";
const Planet = ({ planet }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="card" key={planet.id}>
      <div>
        <Image
          src={
            "http://localHost:1337" +
            planet.attributes.Picture.data[0].attributes.url
          }
          alt=""
          style={{ width: "200px", height: "auto" }}
          zoomed={zoomed}
          onClick={() => setZoomed(true)}
          onRequestClose={() => setZoomed(false)}
        />
      </div>

      <h3>{planet.attributes.name}</h3>
      <p>Radius: {planet.attributes.radius} km</p>
      <p>Distance from our Sun: {planet.attributes.distance_from_sun} km</p>
      <p>Mean temperature: {planet.attributes.mean_temperature} °C</p>
    </div>
  );
};

export default Planet;
