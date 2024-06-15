import React, {useState} from 'react';
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from "../../assets/images/SITT.png"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className="w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg">
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
                    <button className="px-5 py-1">پنل‌ها</button>
                </div>
                <div className="md:hidden"
                onClick={handleClick}
                >
                    {!nav ? <FiAlignJustify className="w-10"/> : <FiX className="w-10"/>}

                </div>
            </div>

            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <li className="border-b-2 border-zinc-300 w-full text-center">خانه</li>
                <li className="border-b-2 border-zinc-300 w-full text-center">پروژه‌ها</li>
                <li className="border-b-2 border-zinc-300 w-full text-center">خدمات</li>
                <li className="border-b-2 border-zinc-300 w-full text-center">اخبار</li>
                <li className="border-b-2 border-zinc-300 w-full text-center">درباره ما</li>
                <li className="border-b-2 border-zinc-300 w-full text-center">تماس با ما</li>
                <div className="flex flex-col my-4">
                    <button className="px-5 py-1">پنل‌ها</button>
                </div>
            </ul>

        </div>
    );
};

export default Navbar;