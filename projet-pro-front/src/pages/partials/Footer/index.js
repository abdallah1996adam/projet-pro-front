import React from "react";

//images
import logo from "../../../assets/images/logo.png"

import "./footer.scss";


const Footer = ()=>{

    return(
        <React.Fragment>
            <footer className="footer">
                <div className="footer__logo-box">
                    <picture className="footer__logo">
                       
                        <img src={logo} alt="logo" className="footer__logo"/>
                        <h5 className='footer__header'> Suda Tours</h5>
                    </picture>
                    
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}

export default Footer;