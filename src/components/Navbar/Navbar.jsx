import React, {useState} from 'react';
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from "../../assets/images/SITT.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-14 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img src={Logo} className="h-8 w-auto"/>
                    <ul className="hidden md:flex">
                        <li><NavLink to="/">خانه</NavLink></li>
                        <li><NavLink to="/projects">پروژه‌ها</NavLink></li>
                        <li><NavLink to="/services">خدمات</NavLink></li>
                        <li><NavLink to="/news">اخبار</NavLink></li>
                        <li><NavLink to="/about">درباره ما</NavLink></li>
                        <li><NavLink to="/contact">تماس با ما</NavLink></li>
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
                <li className="border-b-2 border-zinc-300 w-full text-center">
                    <NavLink to="/">خانه</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full text-center">
                    <NavLink to="/projects">پروژه‌ها</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full text-center">
                    <NavLink to="/services">خدمات</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full text-center">
                    <NavLink to="/news">اخبار</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full text-center">
                    <NavLink to="/about">درباره ما</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full text-center">
                    <NavLink to="/contact">تماس با ما</NavLink>
                </li>
                <div className="flex flex-col my-4">
                    <button className="px-5 py-1">پنل‌ها</button>
                </div>
            </ul>
        </div>
    );
};
export default Navbar;