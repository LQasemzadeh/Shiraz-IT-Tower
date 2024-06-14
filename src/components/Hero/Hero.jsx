import React from 'react';
import ITtower from "../../assets/ITpic/ITtower.webp";
import DataCenter from "../../assets/ITpic/data-center.webp";
import SMSpanel from "../../assets/ITpic/sms_panel.webp";




const ImageList = [
    {
        id: 1,
        img: ITtower,
        title: "برج IT شیراز",
        description:
            "شرکت برج الکترونیک شیراز با هدف گسترش کاربرد فناوری اطلاعات و ارتباطات در کشور و جلب سرمایه‌گذاری خارجی با بهره‌گیری از فرصت‌ها و ظرفیت‌های ارزشمند استان فارس در سال 1383 به عنوان نخستین برج الکترونیک کشور در شیراز تأسیس شد.",
    },
    {
        id: 2,
        img: DataCenter,
        title: "دیتا سنتر",
        description:
            "در راستای ارتقاء زیرساخت های حوزه ی فناوری اطلاعات و ارتباطات استان فارس، شرکت برج الکترونیک شیراز با همکاری فنی و سرمایه گذاری شرکت مهندسی ارتباطات دوربرد فارس ...",
    },
    {
        id: 3,
        img: SMSpanel,
        title: "پنل پیامکی",
        description:
            "شرکت برج الکترونیک شیراز، مجموعهای از سرويسهای پیام دهی تحت وب با واسط کاربری ساده و کارامد جهت سازمان و شرکت ها فراهم کرده است",
    },
];


const Hero = ({ handleOrderPopup }) => {

    const [imageId, setImageId] = React.useState(Book1);
    const [title, setTitle] = React.useState("His Life will forever be Changed");
    const [description, setDescription] = React.useState(
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "100%",
        width: "100%",
    };


    return <>
        <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center
         items-center dark:bg-gray-950 dark:text-white duration-200"
             style={bgImage}>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* textt-content section */}
                    <div
                        data-aos-once="true"
                        className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-right order-2 sm:order-1">
                        <h1
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            {title}
                        <p className="bg-clip-text text-transparent
                        bg-gradient-to-b from-orange-700 text-left text-sm to-orange-400">
                            شرکت برج الکترونیک شیراز
                        </p>{" "}
                        </h1>
                        <p
                            data-aos="slide-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className="text-sm">
                            {description}
                        </p>
                        <div>
                            <button
                                onClick={handleOrderPopup}
                                className="bg-gradient-to-r from-orange-700 to-orange-400 hover:scale-105 duration-200
                                text-white text-sm py-2 px-3 rounded-full">
                                بیشتر بخوانید
                            </button>
                        </div>
                    </div>
                    {/* image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative
                        order-1 sm:order-2 ">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">

                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Hero;