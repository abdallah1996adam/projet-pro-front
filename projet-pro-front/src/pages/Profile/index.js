import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//images
import defaultImg from "../../assets/images/default.jpg";
//icons
import { FiSettings } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsStar } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";

import userService from "../../services/users";

import "./profile.scss";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [file,setFile] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await userService.getById();
        setUserData(data.userData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  const handleClick=async(e)=>{
    let imgData = new FormData();
    imgData.append('file', file)


    try{
      const {data} = await userService.addUserImg(imgData)
      setUserData(data.userUpdate)
      // console.log(userData.userImage);

    }catch(error){
      console.error(error);
    }
  }


  return (
    <>
      <main className="main">
        {userData && (
          <div className="user-view">
            <aside className="menu">
              <ul className="side-nav">
                <li className="active">
                  <Link to="#" className="link">
                    {" "}
                    <FiSettings color="white" className="view-icon" />{" "}
                    Paramètres
                  </Link>
                </li>
                <li className="active">
                  <Link to="#" className="link">
                    {" "}
                    <IoBagCheckOutline color="white" className="view-icon" />
                    Mes réservations
                  </Link>
                </li>
                <li className="active">
                  <Link to="#" className="link">
                    {" "}
                    <BsStar color="white" className="view-icon" />
                    Mes avis
                  </Link>
                </li>
                <li className="active">
                  <Link to="#" className="link">
                    {" "}
                    <BsCreditCard color="white" className="view-icon" />
                    facturation
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="user-content">
              <div className="form-container">
                <h6 className="header-content ma-bt">
                  Vos paramètres de compte
                </h6>
                <form className="content-form">
                  <div className="form-group">
                    <label htmlFor="text" className="form-label">
                      Nom
                    </label>
                    <input
                      className="form-input"
                      type="firstName"
                      placeholder="votre nom"
                      value={userData.firstName}
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
                      type="email"
                      placeholder="email@exemple.com"
                      value={userData.emailId}
                      // value={firstName}
                      //onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="upload-img form_upload">
                    <img
                      src={defaultImg ? defaultImg : `data:image/png;base64,${userData.userImage}`}
                      alt="profile"
                      className="user-photo"
                    />
                    <input
                      name="photo"
                      id="photo"
                      type="file"
                      className="form-upload"
                      accept="image/*"
                      onChange={(e)=> setFile(e.target.files[0])}
                    />
                    <label for="photo">Choisissez une nouvelle photo</label>
                  </div>
                  <div className="form-group right">
                    <button className="btn5 btn5-small btn5-green" onClick={handleClick}>
                      Enregistrer
                    </button>
                  </div>
                </form>
              </div>
              <div className="line"></div>
              <div className="user-view-container">
                <h6 className="user-view-header ma-bt">
                  Changer votre mot de passe
                </h6>
                <div className="form-group">
                  <label htmlFor="text" className="form-label">
                    Mot de passe actuel
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="••••••••••••"
                    // value={firstName}
                    //onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text" className="form-label">
                    Nouveau mot de passe
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="••••••••••••"
                    // value={firstName}
                    //onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text" className="form-label">
                    Confirmez le mot de passe
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="••••••••••••"
                    // value={firstName}
                    //onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group right">
                  <Link className="btn5 btn5-small btn5-green">
                    Sauvegarder le mot de passe
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;
