import React from 'react';
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from "../../assets/images/SITT.png"


const Navbar = () => {
    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-14 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img src={Logo} className="h-8 w-auto"/>
                    <ul className="hidden md:flex">
                        <li>خانه</li>
                        <li>پروژه‌ها</li>
                        <li>خدمات</li>
                        <li>اخبار</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button>پنل‌ها</button>
                </div>

            </div>
            <FiAlignJustify className="w-10"/>
            <FiX className="w-10"/>
        </div>
    );
};

export default Navbar;