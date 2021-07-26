import React from "react";
import {Link} from "react-router-dom"


import './style.scss'

const Login = () => {
  return (
    <>
     <main className="base-container">
       <div className="base-container__form">
         <h5 className="heading-secondary">CONNECTEZ-VOUS À VOTRE COMPTE</h5>
         <form className="form-login">
           <div className="form-group">
             <label htmlFor="email" className="form-label"> Email</label>
             <input className="form-input" type="email" placeholder="vous@exemple.com" required/>
           </div>
           <div className="form-group">
             <label htmlFor="password" className="form-label"> Mot de passe</label>
             <input className="form-input" type="password" placeholder="••••••••••••" required minLength="4"/>
           </div>
           <div className="form-group group-flex">
             <button className="btn btn-green">Login</button>
             <Link className="form-link" to="/signup">vous n'avze pas un compte?</Link>
           </div>
         </form>
       </div>
     </main>
    </>
  );
};

export default Login;
