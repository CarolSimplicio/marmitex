import React from "react";
import fotoBanner from "../Img/bannerHome.png";

function banner() {
    return (
        <div className="caixabanner mb-4">
            <div className="container">
                <div className="row">
                    <div className="col">                        
                        <button className="botaoBanner">Peça Agora!</button>
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