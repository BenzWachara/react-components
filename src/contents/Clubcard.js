import React from "react";

import K1 from "../Img/K1.png";
import K2 from "../Img/K2.png";
import KKKK from "../Img/KKKK.png";
import K3 from "../Img/K3.png";
import K4 from "../Img/K4.png";

function Clubcard() {
  return (
    <section className="body-content">

      <div className="flex-content">
        <div className="content-block">
          <div className="content-card">
            <div className="size-text">
              <h1>CARD KING</h1>
            </div>
            <h2>KING OF SPADES</h2>
            <p className="description-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn-more-info">MORE INFO</button>
          </div>

          <div className="show-card">
            <div className="c1">
              <div className="c2">
                <div className="line-card"></div>
              </div>
              <img src={KKKK} alt="KKKK.png" className="play-card tage-front" />
              <img src={K1} alt="K1.png" className="play-card card-pic1" />
              <img src={K2} alt="K2.png" className="play-card card-pic2" />
              <img src={K3} alt="K3.png" className="play-card card-text" />
              <img src={K4} alt="K4.png" className="play-card card-text" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Clubcard;
