import React from "react";
import LazyLoad from "react-lazyload";

import pinkmatter1 from '../Img/webdesign/pinkmatter1.jpg'
import pinkmatter2 from '../Img/webdesign/pinkmatter2.jpg'
import pinkmatter3 from '../Img/webdesign/pinkmatter3.png'
import imfree1 from '../Img/webdesign/imfree1.jpg'
import imfree2 from '../Img/webdesign/imfree2.jpg'
import imfree3 from '../Img/webdesign/imfree3.png'
import sheinso1 from '../Img/webdesign/sheinso1.jpg'
import sheinso2 from '../Img/webdesign/sheinso2.jpg'
import sheinso3 from '../Img/webdesign/sheinso3.png'


function Webdesign(){

    return(
        <>
        <div className="web-designs">
            <div className="row-webdesigns1">
                <LazyLoad height={200}>
                    <img className="img-design1" src={pinkmatter1} alt="pinkmatter1.jpg" />
                </LazyLoad>
                
            </div>
            <div className="row-webdesigns2">
                <LazyLoad height={200}>
                    <img className="img-design2" src={pinkmatter2} alt="pinkmatter2.jpg" />
                </LazyLoad>
                
            </div>
            <div className="row-webdesigns3">
                <LazyLoad height={200}>
                    <h2 className="title-design">PINKMATTER</h2>
                    <img className="img-design3" src={pinkmatter3} alt="pinkmatter3.png" />
                </LazyLoad>
                
            </div>
        </div>

        <div className="web-designs">
            <div className="row-webdesigns3">
                <LazyLoad height={200}>
                    <h2 className="title-design">I'M FREE</h2>
                    <img className="img-design3" src={imfree3} alt="imfree3.png" />
                </LazyLoad>
                
            </div>
            <div className="row-webdesigns2">
                <LazyLoad height={200}>
                    <img className="img-design2" src={imfree2} alt="imfree2.jpg" />
                </LazyLoad>
                
            </div>
            <div className="row-webdesigns1">
                <LazyLoad height={200}>
                    <img className="img-design1" src={imfree1} alt="imfree1.jpg" />
                </LazyLoad>
                
            </div>
        </div>

        <div className="web-designs">
            <div className="row-webdesigns1">
                <LazyLoad height={200}>
                    <img className="img-design1" src={sheinso1} alt="pinkmatter1.jpg" />
                </LazyLoad>
                
            </div>
            <div className="row-webdesigns2">
                <LazyLoad height={200}>
                    <img className="img-design2" src={sheinso2} alt="pinkmatter2.jpg" />
                </LazyLoad>
                
            </div>
            <div className="row-webdesigns3">
                <LazyLoad height={200}>
                    <h2 className="title-design">E-COMMERCE</h2>
                    <img className="img-design3" src={sheinso3} alt="pinkmatter3.png" />
                </LazyLoad>
                
            </div>
        </div>
        </>
    );
}

export default Webdesign;