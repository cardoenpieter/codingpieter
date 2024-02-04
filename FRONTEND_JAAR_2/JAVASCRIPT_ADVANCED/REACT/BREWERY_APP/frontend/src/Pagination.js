//import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const Pagination = ({ input, limit, setBreweries }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const offset = limit * (page - 1);
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_state=${input}&page=${offset}&per_page=${limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setBreweries(res);
      })
      .catch((err) => console.log(err));
  }, [page, input, limit, setBreweries]);
  return (
    <div>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
//by_state=${input}&
