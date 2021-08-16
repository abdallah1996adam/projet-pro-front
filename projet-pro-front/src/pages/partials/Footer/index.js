import React from "react";
import { Link } from "react-router-dom";

//images
import logo from "../../../assets/images/logo.png";

import "./footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__list">
          <Link to="/" className="footer__link">
            Home
          </Link>

          <Link to="/tours" className="footer__link">
            Tours
          </Link>

          <Link to="#" className="footer__link">
            Contact
          </Link>
          <Link to="#" className="footer__link">
            POLITIQUE DE CONFIDENTIALITÉ
          </Link>
        </div>
        <p className="footer__text">Copyright © Code and Create All Rights Resrved Abdallah Adam</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
