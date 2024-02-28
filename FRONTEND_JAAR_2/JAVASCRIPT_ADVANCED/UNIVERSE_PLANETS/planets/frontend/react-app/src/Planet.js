import Image from "react-image-enlarger";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Planet = ({ planet }) => {
  const [zoomed, setZoomed] = useState(false);

  const navigate = useNavigate();
  const AU = 6.68458712 * Math.pow(10, -9);
  return (
    <div>
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
        <p>
          Distance from our Sun: {planet.attributes.distance_from_sun} km (
          {(AU * planet.attributes.distance_from_sun).toFixed(2)} AU)
        </p>
        <p>Mean temperature: {planet.attributes.mean_temperature} °C</p>
        <button onClick={() => navigate(`/details/${planet.id}`)}>
          Read more...
        </button>
      </div>
    </div>
  );
};

export default Planet;
