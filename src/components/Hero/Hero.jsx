import React from 'react';
import { MdOutlineTextsms } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import bgImg from "../../assets/images/ITtower.webp";

const Hero = () => {
    return (
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">شرکت برج الکترونیک شیراز</p>
                    <h1 className="py-3 text-4xl md:text-6xl font-bold">برج IT شیراز</h1>
                    <p className="text-2xl">هر آنچه برای بهبود کسب و کار خود نیاز دارید برج الکترونیک شیراز فراهم کرده است.</p>
                    <button className="py-3 px-6 sm:w-[60%] my-4">بیشتر بخوانید</button>
                </div>
                <div>
                    <img src={bgImg}/>
                </div>

            </div>
            
        </div>
    );
};

export default Hero;