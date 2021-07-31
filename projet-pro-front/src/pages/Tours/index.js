import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import tourService from "../../services/tours";
//icons
import { FiMapPin } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";

import "./style.scss";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await tourService.getAll();
      setTours(data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <main className="main">
        <div className="card-container">
          {tours.map((t) => (
            <div className="card" key={t.id}>
              <div className="card-header">
                <div className="card-image">
                  <div className="card-image-overlay"></div>
                  <img
                    src={`data:image/png;base64,${t.images[1].image}`}
                    alt="camels"
                    className="card-img-pic"
                  />
                </div>
                <h3 className="heading-three">
                  <span>{t.tour_name}</span>
                </h3>
              </div>
              <div className="card-details">
                <h4 className="card-sub-header">{t.duration}</h4>
                <p className="card-text">
                  {t.description.length < 20
                    ? `${t.description}`
                    : `${t.description.substring(0, 60)}...`}
                </p>
                <div className="card-data">
                  <FiMapPin className="card-icon" />
                  <span>{t.location}</span>
                </div>
                <div className="card-data">
                  <MdDateRange className="card-icon" />
                  <span>{t.tour_date.substring(0, 10)}</span>
                </div>
                <div className="card-data">
                  <BiUser className="card-icon" />
                  <span>{t.max_people}</span>
                </div>
                <div className="card-data">
                  <BiFlag className="card-icon" />
                  <span>{t.guide_name}</span>
                </div>
              </div>
              <div className="card-footer">
                <p>
                  <span className="card-footer-prix">{t.price} </span>
                  <span className="card-footer-text"> pour {t.max_people}</span>
                </p>
                <p className="card-rating">
                  <span className="card-footer-prix">{t.rating}</span>
                  <span className="card-footer-text"> évaluation (5)</span>
                </p>
                <Link to={"/tour/:" + t.id} className="btn btn-green btn-small">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Tours;
