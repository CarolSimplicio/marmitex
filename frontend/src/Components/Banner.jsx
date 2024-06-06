import React from "react";
import fotoBanner from "../Img/bannerHome.png";
import face from "../Img/arroz.webp";

function banner() {
    const onClick = () => {
        window.location.href = "#sliderHome";
      }
    return (
        <div className="caixabanner mb-4">
            <div className="container">
                <div className="row">
                    <div className="col">                        
                        <button className="botaoBanner"  onClick={onClick}>Peça Agora!</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                    <img src={face} className="redeSocial"/>
                    </div>
                    <div className="col-lg-1">
                    <img src={face} className="redeSocialIn"/>
                    </div>
                    <div className="col-lg-1">
                    <img src={face} className="redeSocialTel"/>
                    </div>
                </div>
            </div>
            <div>
                <img src={fotoBanner} className="imgBanner"/>
            </div>
           
        </div>
    )
}

export default banner;