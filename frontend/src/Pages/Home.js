// Home
import React from "react";
import SliderCardapio from "../Components/SliderHome";
import BannerHome from "../Components/Banner";
import "../CSS/Index.css";
// import Navbar from "../Components/NavegacaoIndex";

function Home(){
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <BannerHome/>
        <SliderCardapio />
      </div>
    </>
  );
};

export default Home;
