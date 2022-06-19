import React from 'react';
import Navigetion from './Navigetion';
import Mobilenav from './Mobilenav';
import { Link } from 'react-router-dom'

import ImageLogo from '../Img/logo-wachara.png'

function Header(){
    return(
        <div className="header-style">
            <div className="logo-item">
                <Link to="/popupimage">
                <img src={ImageLogo} alt="imagelogo" className="Image-logo"/>
                </Link> 
            </div>
            <div className="navbar-item">
                <nav>
                    <ul>
                        <Navigetion tolink="/popupimage" item="Pokemon API"></Navigetion>
                        <Navigetion tolink="/slide" item="Slide"></Navigetion>
                        <Navigetion tolink="/clubcard" item="Animation Card"></Navigetion>
                        <Navigetion tolink="/webdesign" item="Web Design"></Navigetion>
                    </ul>
                </nav>
            </div>
            <Mobilenav/>
        </div>
    );
}

export default Header;