import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//images
import defaultImg from "../../assets/images/default.jpg";
//icons
import { FiSettings } from "react-icons/fi";

import userService from "../../services/users";

import "./profile.scss";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await userService.getById();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <main className="main">
        <div className="user-view">
          <aside className="menu">
            <ul className="side-nav">
              <li className="active">
                <Link to="#" className="link">
                  {" "}
                  <FiSettings color="white" className="view-icon" /> Paramètres
                </Link>
              </li>
              <li className="active">
                <Link to="#" className="link">
                  {" "}
                  <FiSettings color="white" className="view-icon" />
                  Mes réservations
                </Link>
              </li>
              <li className="active">
                <Link to="#" className="link">
                  {" "}
                  <FiSettings color="white" className="view-icon" />
                  Mes avis
                </Link>
              </li>
              <li className="active">
                <Link to="#" className="link">
                  {" "}
                  <FiSettings color="white" className="view-icon" />
                  facturation
                </Link>
              </li>
            </ul>
          </aside>
          <aside className="user-content">
            <div className="form-container">
              <h6 className="header-content ma-bt">Vos paramètres de compte</h6>
              <form className="content-form">
                <div className="form-group">
                  <label htmlFor="text" className="form-label">
                    Nom
                  </label>
                  <input
                    className="form-input"
                    type="firstName"
                    placeholder="votre nom"
                    // value={firstName}
                    //onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="firstName"
                    placeholder="email@exemple.com"
                    // value={firstName}
                    //onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="upload-img form_upload">
                  <img src={defaultImg} alt="profile" className="user-photo" />
                  <input
                    name="photo"
                    id="photo"
                    type="file"
                    className="form-upload"
                    accept="image/*"
                  />
                  <label for="photo">Choisissez une nouvelle photo</label>
                </div>
              </form>
            </div>
            <div className="line"></div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Profile;
