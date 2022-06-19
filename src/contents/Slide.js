import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import silde001 from "../Img/slide/slide001.jpg";
import silde002 from "../Img/slide/slide002.jpg";
import silde003 from "../Img/slide/slide003.jpg";
import silde004 from "../Img/slide/slide004.jpg";
import silde005 from "../Img/slide/slide005.jpg";
import silde006 from "../Img/slide/slide006.jpg";
import silde007 from "../Img/slide/slide007.jpg";
import silde008 from "../Img/slide/slide008.jpg";
import silde009 from "../Img/slide/slide009.jpg";
import slide010 from "../Img/slide/slide010.jpg";

const imagesPoster = [
  silde001,
  silde002,
  silde003,
  silde004,
  silde005,
  silde006,
  silde007,
  silde008,
  silde009,
  slide010,
];

function Slide() {
  const [imageIndex, setImageIndex] = useState(0);
  const [show, setShow] = useState(3);

  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 480px)").matches) {
      setShow(1);
    }
  }, []);

  //setting slide
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 2000,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <>
      <div className="page-content">
        <h1>Slide</h1>
        <div className="div-poster"></div>
      </div>
      <div className="react-slick">
        <Slider {...settings} className="image-poster">
          {imagesPoster.map((img, index) => (
            <div key={img} className={index === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Slide;
