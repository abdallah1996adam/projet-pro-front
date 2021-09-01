import React, { useState, useEffect } from "react";

import bookingService from "../../../services/booking";

import { FiMapPin } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";

import "./userbooking-style.scss";

const UserBooking = (props) => {
  const userId = props.match.params.id;
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    async function fecthData() {
      try {
        const { data } = await bookingService.getBooking(userId);
        setTourData(data);
        console.log(tourData.tour[0].tour_name);
      } catch (error) {
        console.log(error);
      }
    }
    fecthData();
  }, []);

  return (
    <>
      {tourData && (
        <main className="main">
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <div className="card-image">
                  <div className="card-image-overlay"></div>
                  <img
                    src={`data:image/png;base64,${tourData.Images[0].image}`}
                    alt="camels"
                    className="card-img-pic"
                  />
                </div>
                <h3 className="heading-three">
                  <span>{tourData.tour[0].tour_name}</span>
                </h3>
              </div>
              <div className="card-details">
                <h4 className="card-sub-header">{tourData.tour[0].duration}</h4>
                <p className="card-text">
                  {tourData.tour[0].description.length < 20
                    ? `${tourData.tour[0].description}`
                    : `${tourData.tour[0].description.substring(0, 60)}...`}
                </p>
                <div className="card-data">
                  <FiMapPin className="card-icon" />
                  <span>{tourData.tour[0].location}</span>
                </div>
                <div className="card-data">
                  <MdDateRange className="card-icon" />
                  <span>{tourData.tour[0].tour_date.substring(0, 10)}</span>
                </div>
                <div className="card-data">
                  <BiUser className="card-icon" />
                  <span>{tourData.tour[0].max_people}</span>
                </div>
                <div className="card-data">
                  <BiFlag className="card-icon" />
                  <span>{tourData.tour[0].guide_name}</span>
                </div>
              </div>
              <div className="card-footer">
                <p>
                  <span className="card-footer-prix">
                    {tourData.tour[0].price}{" "}
                  </span>
                  <span className="card-footer-text">
                    {" "}
                    pour {tourData.tour[0].max_people}
                  </span>
                </p>
                <p className="card-rating">
                  <span className="card-footer-prix">
                    {tourData.tour[0].rating}
                  </span>
                  <span className="card-footer-text"> évaluation (5)</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default UserBooking;
