import React from "react";
import { Link } from "react-router-dom";
import {IoMdCompass} from 'react-icons/io'
import { IconContext } from "react-icons/lib";
import {MdNaturePeople} from 'react-icons/md'
import {FaWpexplorer} from 'react-icons/fa'
import {GiCampingTent} from 'react-icons/gi'
import {GrLocation} from 'react-icons/gr'

import pyramid from "../../assets/images/pyramid.jpg";
import camels from "../../assets/images/camels.jpg";
import tutil from "../../assets/images/tutil.jpg";


import "./home.scss";

const Home = () => {
  return (
    <>
    <IconContext.Provider value={{color: "#7ed56f", size: "7rem"}}>
      <section className="container">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-main">wonder land </span>
            <span className="heading-sub">Welcome To Sudan !</span>
          </h1>
        </div>
      </section>
      <main>
        <div className="about">
          <div className="center margin-bottom-8">
            <h2 className="heading-secondary">
              des tours passionnantes pour les amoureux de la culture
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="header-three margin-small">
                Vous allez adorer la nature !
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                non njkllm laoreet odio. Aenean interdum dui sed velit mollis
                rhoncus. Donec rutrum placerat odio, sed tincidunt mi ultricies
                sit amet.
              </p>
              <h3 className="header-three margin-small">
                Vivre des aventures comme jamais auparavant
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                non njkllm laoreet odio.
              </p>
              <Link to="#" className="btn-txt">
                Trouver plus &rarr;
              </Link>
            </div>
            <div className="col-1-of-2">
              <div className="gallery">
                <img
                  src={camels}
                  alt="nature"
                  className="gallery-img gallery-img-1"
                />
                <img
                  src={pyramid}
                  alt="pyramid"
                  className="gallery-img gallery-img-2"
                />
                <img
                  src={tutil}
                  alt="boat"
                  className="gallery-img gallery-img-3"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <IoMdCompass className="world icon-world"/>
                <h3 className="header-three margin-small"> Découvrir le Soudan</h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <MdNaturePeople className="world icon-world"/>
                <h3 className="header-three margin-small">Rencontrer la nature</h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <FaWpexplorer className="world icon-world"/>
                <h3 className="header-three margin-small">Explorer plus d'endroits</h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <GiCampingTent className="world icon-world"/>
                <h3 className="header-three margin-small">Vivez l'aventure</h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="tours">
      <div className="center margin-bottom-8">
            <h3 className="heading-secondary">
            les tours les plus populaires
            </h3>
          </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <div className="card-image">
                <div className="card-image-overlay"></div>
                <img src={camels} alt="camels" className="card-img-pic"/>
              </div>
              <h3 className="heading-three">
                <span>The sea Explorer</span>
              </h3>
            </div>
            <div className="card-details">
              <h4 className="card-sub-header"> 7days-tour</h4>
              <p className="card-text"> Loremlkjk klkjk hjjkb jhgfh  jhkjlh fhghjj  khjg gjhjk jhg j gjh kh</p>
              <div className="card-data">
                <GrLocation className='card-icon' />
                <span>khartoum</span>
              </div>
              <div className="card-data">
                <GrLocation className='card-icon' />
                <span>khartoum</span>
              </div>
              <div className="card-data">
              <GrLocation className='card-icon' />
                <span>khartoum</span>
              </div>
              <div className="card-data">
              <GrLocation className='card-icon' />
                <span>khartoum</span>
              </div>
            </div>
            <div className="card-footer">
              <p>
                <span className='card-footer-prix'> 300€</span>
                <span className="card-footer-text">7 persons</span>
              </p>
              <p className="card-rating">
                <span className='card-footer-prix'>4.8</span>
                <span className="card-footer-text">rating (5)</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      </IconContext.Provider>
    </>
  );
};

export default Home;
