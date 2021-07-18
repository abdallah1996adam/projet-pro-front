import React from "react";

import Header from "../partials/Header";
import "./home.scss";

const Home = () => {
  return (
    <>
      <section className="container">
        <Header />
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-main">wonder land </span>
            <span className="heading-sub">Welcome To Sudan !</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
