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
      <div className="item-container grid grid-col5">
        <p>{details.name}</p>
        <p>{details.city}</p>
        <p>{details.postal_code}</p>
        <p>{details.state}</p>
        <p>{details.street}</p>
      </div>
    </div>
  );
};
export default BreweryDetails;
