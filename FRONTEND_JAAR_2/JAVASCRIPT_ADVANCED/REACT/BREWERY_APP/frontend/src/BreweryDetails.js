import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BreweryDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container-general">
      <h1>Details</h1>

      <div className="card-details">
        <p className="name">{details.name}</p>
        <p className="type">Brewery type: {details.brewery_type}</p>
        <div className="address">
          <p>{details.street}</p>
          <p>{details.postal_code}</p>
          <p>{details.city}</p>
          <p>{details.state}</p>
        </div>
        <div className="contact">
          <p>&#9742; {details.phone}</p>
          <a href={details.website_url} target="_blank" rel="noreferrer">
            Go to our website
          </a>
        </div>
      </div>
    </div>
  );
};
export default BreweryDetails;
