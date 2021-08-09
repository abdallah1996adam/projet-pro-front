import React, { useEffect, useState } from "react";
//icons
import { Link } from "react-router-dom";
import { IoMdCompass } from "react-icons/io";
import { MdNaturePeople } from "react-icons/md";
import { FaWpexplorer } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";

import tourService from "../../services/tours";
//images
import pyramid from "../../assets/images/pyramid.jpg";
import camels from "../../assets/images/camels.jpg";
import tutil from "../../assets/images/tutil.jpg";
import carolineTestimony from "../../assets/images/testimony2.jpg";
import leo from "../../assets/images/testimony4.jpg";
import sudan from "../../assets/videos/sudan.mp4";

import "./home.scss";

const Home = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await tourService.getAll();
        const tourData = data.results;
        const tours = tourData.slice(0, 3);
        setTour(tours);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="container">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-main">wonder land </span>
            <span className="heading-sub">Bienvenue au Soudan!</span>
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
              <Link to="/tours" className="btn-txt">
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
                <IoMdCompass className="world icon-world" />
                <h3 className="header-three margin-small">
                  {" "}
                  Découvrir le Soudan
                </h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <MdNaturePeople className="world icon-world" />
                <h3 className="header-three margin-small">
                  Rencontrer la nature
                </h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <FaWpexplorer className="world icon-world" />
                <h3 className="header-three margin-small">
                  Explorer plus d'endroits
                </h3>
                <p className="feature-box_text">
                  eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <GiCampingTent className="world icon-world" />
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
          <h3 className="heading-secondary">les tours les plus populaires</h3>
        </div>
        <main className="main">
          <div className="card-container">
            {tour.map((t, i) => (
              <div className="card" key={i}>
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
                    <span className="card-footer-text">
                      {" "}
                      pour {t.max_people}
                    </span>
                  </p>
                  <p className="card-rating">
                    <span className="card-footer-prix">{t.rating}</span>
                    <span className="card-footer-text"> évaluation (5)</span>
                  </p>
                  <Link
                    to={"/tour/:" + t.id}
                    className="btn btn-green btn-small"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="center-btn btn-margin">
            <Link to="/tours" className="btn btn-green">
              Découvrir plus de tours &rarr;{" "}
            </Link>
          </div>
        </main>
        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop id="video">
              <source src={sudan} type="video/mp4" />
              you browser is not supported
            </video>
          </div>
          <div className="center margin-bottom-8">
            <h3 className="heading-secondary margin-small">
              nous rendons les gens tres heureux
            </h3>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={carolineTestimony}
                  alt="carolineTestimony"
                  className="story__image"
                />
                <figcaption className="story__caption">
                  Caroline Geoffrey
                </figcaption>
              </figure>
              <article className="story__text">
                <h3 className="story__heading">
                  C'était le meilleur voyage de ma vie
                </h3>
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut skjlm".
                </p>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={leo}
                  alt="carolineTestimony"
                  className="story__image"
                />
                <figcaption className="story__caption">leo marc</figcaption>
              </figure>
              <article className="story__text">
                <h3 className="story__heading">Wow! ça change ma vie</h3>
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut skjlm".
                </p>
              </article>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
