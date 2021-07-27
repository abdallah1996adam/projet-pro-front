import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import userService from "../../services/users";

import "./style.scss";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleClick = async () => {
    try {
       await userService.signup(
        firstName,
        lastName,
        email,
        password
      );
      history.push("/login");
    } catch (error) {
      console.error(error.response.data.Error);
    }
  };

  return (
    <>
      <main className="base-container">
        <div className="base-container__form">
          <h5 className="heading-secondary">Créez votre compte</h5>
          <form className="form-login">
            <div className="form-group">
              <label htmlFor="text" className="form-label">
                Nom
              </label>
              <input
                className="form-input"
                type="firstName"
                placeholder="votre nom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="text" className="form-label">
                {" "}
                Prénom
              </label>
              <input
                className="form-input"
                type="lastName"
                placeholder="votre prénom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                {" "}
                Mot de passe
              </label>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="4"
              />
            </div>
            <div className="form-group group-flex">
              <Link onClick={handleClick} className="btn btn-green">
                Signup
              </Link>
              <Link className="form-link" to="/login">
                Vous avze déjà un compte?{" "}
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
