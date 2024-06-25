import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import consulting from "../../src/assets/images/services/consultingg.png";
import cooperation from "../../src/assets/images/services/cooperation.png";
import dataCenter from "../../src/assets/images/services/data-center.webp";
import examing from "../../src/assets/images/services/examing.png";
import eximp from "../../src/assets/images/services/eximp.png";
import informatique from "../../src/assets/images/services/Informatique.png";
import ITTower from "../../src/assets/images/services/ITtower-1.webp";
import smsP from "../../src/assets/images/services/sms_panel.webp";
import web from "../../src/assets/images/services/web.png";


const Services = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const data = [
        {
            img: consulting,
            name: "مشاوره در حوزه فناوری اطلاعات",
            review: "",
        },
        {
            img: cooperation,
            name: "همکاری با شرکت‌های دانش بنیان",
            review: "",
        },
        {
            img: smsP,
            name: "سامانه پیامکی",
            review: "",
        },
        {
            img: ITTower,
            name: "مدیریت برج فناوری اطلاعات شیراز",
            review: "",
        },
        {
            img: web,
            name: "طراحی وبسایت",
            review: "",
        },
        {
            img: examing,
            name: "برگزاری آزمون‌های خصوصی و مجازی",
            review: "",
        },
        {
            img: eximp,
            name: "صادرات و واردات",
            review: "",
        },
        {
            img: dataCenter,
            name: "مرکز داده",
            review: "",
        },
        {
            img: informatique,
            name: "صادرات و واردات کالاهای انفورماتیک",
            review: "",
        },
    ];



    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d) => (
                    <div className="bg-white h-[450px] text-black rounded-xl">
                        <div className="h-56 rounded-t-xl bg-orange-300 flex justify-center items-center">
                            <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{d.name}</p>
                            <p>{d.review}</p>
                        </div>
                    </div>
                ))}
                </Slider>

            </div>

        </div>
    );
};

export default Services;