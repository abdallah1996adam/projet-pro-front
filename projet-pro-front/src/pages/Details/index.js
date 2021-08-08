import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fr";

//icons
import { IoTimeOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import {BsPeople} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'

import tourService from "../../services/tours";

import "./style.scss";

const Details = (props) => {
  const id = props.match.params.id;

  const [tourDetails, setTourDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await tourService.getById(id);
      setTourDetails(data.tour[0]);
    }
    fetchData();
  }, []);
  return (
    <>
      {tourDetails && (
        <>
          <section className="details">
            <div className="details__content">
              <div className="overlay">&nbsp;</div>
              <img
                src={`data:image/png;base64,${tourDetails.images[1].image}`}
                alt="sudan"
                className="overlay-img"
              />
            </div>
            <div className="details__heading-box">
              <h4 className="img-heading">
                <span className="heading-span">{tourDetails[0].tour_name}</span>
              </h4>
              <div className="heading-box-group">
                <div className="heading-box-details">
                  <IoTimeOutline color="white" className="heading-box-icon" />
                  <span className="heading-box-text">
                    {tourDetails[0].duration}
                  </span>
                </div>
                <div className="heading-box-details">
                  <RiMapPinLine color="white" className="heading-box-icon" />
                  <span className="heading-box-text">
                    {tourDetails[0].location}
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="section-description">
            <div className="section-description__overview">
              <div>
                <div className="overview-group">
                  <h3 className="third-heading ma-bt">rapide regard</h3>
                  <div className="overview-details">
                    <AiOutlineCalendar className="overview-icon" />
                    <span className="overview-span">prochain date</span>
                    <span className="overview-text">
                      {moment(tourDetails[0].tour_date).format(" MMMM  YYYY")}
                    </span>
                  </div>
                  <div className="overview-details">
                    <BsPeople className="overview-icon" />
                    <span className="overview-span">PARTICIPANTS</span>
                    <span className="overview-text">
                      {tourDetails[0].max_people}
                    </span>
                  </div>
                  <div className="overview-details">
                    <BsStar className="overview-icon" />
                    <span className="overview-span">ÉVALUATION</span>
                    <span className="overview-text">
                      {tourDetails[0].rating} / 5
                    </span>
                  </div>
                </div>
                <div className="overview-group">
                <h3 className="third-heading ma-bt">vos guides touristiques</h3>
                <div className="overview-details">
                <span className="overview-span">lead guide</span>
                    <span className="overview-text">
                      {tourDetails[0].guide_name} 
                    </span>
                </div>
                </div>
              </div>
            </div>
            <div className="description-box">
            <h3 className="third-heading ma-bt-lg">À propos de {tourDetails[0].tour_name}</h3>
            <p className="description-text">{tourDetails[0].description}</p>
            </div>
          </section>
          <section className="section-pictures">
            <figure className="section-pictures-box">
              <img src={`data:image/png;base64,${tourDetails.images[0].image}`} alt="tourist" className="picture-box-img picture-box-img_1"/>
            </figure>
            <figure className="section-pictures-box">
              <img src={`data:image/png;base64,${tourDetails.images[2].image}`} alt="tourist" className="picture-box-img picture-box-img_2"/>
            </figure>
            <figure className="section-pictures-box">
              <img src={`data:image/png;base64,${tourDetails.images[3].image}`} alt="tourist" className="picture-box-img picture-box-img_3"/>
            </figure>
          </section>
          <section className="section-map">

          </section>
        </>
      )}
    </>
  );
};

export default Details;
