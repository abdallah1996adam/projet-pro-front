import React, { useEffect, useState } from "react";

import tourService from "../../services/tours";

import "./style.scss";

const Details = (props) => {
  const id = props.match.params.id;

  const [tourDetails, setTourDetails] = useState([]);

  const fetchData = async () => {
    const { data } = await tourService.getById(id);
    const tourData = data.tour[0];
    setTourDetails(tourData);
    console.log(tourDetails);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="details">
        <div className="details__content">
          <div className="overlay">&nbsp;</div>
          {/* <img src={`data:image/png;base64,${tourDetails.images[0].image}`} alt="sudan"/> */}
        </div>
      </section>
    </>
  );
};

export default Details;
