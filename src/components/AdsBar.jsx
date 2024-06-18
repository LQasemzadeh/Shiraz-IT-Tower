import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import mega from "../../src/assets/images/saham/mega.png";
import logo from "../../src/assets/images/saham/Logo-Compress.png";
import shiraz from "../../src/assets/images/saham/Shiraz_Especial_Economic_Zone.png";
import layer from "../../src/assets/images/saham/Layer-82.png";


const AdsBar = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-lg px-5 py-5 sm:px-6 sm:py-12 lg:max-w-lg lg:px-4 lg:py-2 scrollbar-hide">
                <div className="mainContainer">
                    <Slider {...settings}>
                        <div className="container">
                            <img src={mega} alt="Falat"/>
                        </div>
                        <div className="container">
                            <img src={logo} alt="Jam"/>
                        </div>
                        <div className="container">
                            <img src={shiraz} alt="Marun"/>
                        </div>
                        <div className="container">
                            <img src={layer} alt="Pasargad"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AdsBar;