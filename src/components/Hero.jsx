import React from 'react';
import hero from "../assets/images/hero.png";


const Hero = () => {



    const name = "شرکت برج الکترونیک شیراز";
    const businessImproveMessage = "هر آنچه برای بهبود کسب و کار خود نیاز دارید برج الکترونیک شیراز فراهم کرده است.";

    return (
        <div className={`flex bg-white lg:flex-row lg:items-center flex-col items-start px-4 py-28 relative overflow-hidden md:px-16`}>
            <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:mx-10 lg:text-right w-full items-center text-center mb-5 md:mb-0">
                <h1
                    data-aos="fade-down"
                    className='md:text-2xl text-lg mx-auto lg:mx-0 font-bold leading-tight text-navy'>
                    <span style={{color: "#304e70"}}>{name}!</span>
                </h1>
                <p data-aos="fade-down" className='leading-normal md:text-lg text-lg text-navy'>{businessImproveMessage}</p>
                <button
                    data-aos="fade-down"
                    className='mt-8 text-base rounded-full text-white font-bold py-2 px-6 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5'
                    style={window.innerWidth > 767 ? {
                        backgroundColor: "#304e70",
                        boxShadow: "0px 10px 20px rgba(78, 112, 149, 0.8)"
                    } : {backgroundColor: "#304e70", boxShadow: "0px 5px 20px rgba(78, 112, 149, 0.8)"}}>
                    بیشتر بخوانید
                </button>

            </div>
            <div className="lg:w-4/5 w-full lg:-mt-6 relative">
                <img src={hero} loading="eager" alt=""
                     data-aos="slide-up"
                     className="w-4/5 mx-auto" width="600" height="300" />
            </div>



        </div>

    );
};
export default Hero;