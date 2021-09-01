import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import userService from "../../services/users";
import { UserContext } from "../../App";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import "./style.scss";

toast.configure();

const Login = () => {
  const {state, dispatch} = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleClick = async () => {
    try{
      const {data}= await userService.login(email, password);
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token',data.token)
      dispatch({type:"USER", payload: data.user})
      toast.success("Bienvenue", {position: toast.POSITION.TOP_CENTER})
      history.push('/profile' )
    }catch(error){
      toast.error(error.response.data.Error,{position: toast.POSITION.TOP_CENTER})
      console.error(error);
    }
  };
  return (
    <>
      <main className="base-container">
        <div className="base-container__form">
          <h5 className="heading-secondary">CONNECTEZ-VOUS À VOTRE COMPTE</h5>
          <form className="form-login">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                minLength="4"
              />
            </div>
            <div className="form-group group-flex">
              <Link onClick={handleClick} className="btn btn-green">Login</Link>
              <Link className="form-link" to="/signup">
                Vous n'avez pas un compte?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
