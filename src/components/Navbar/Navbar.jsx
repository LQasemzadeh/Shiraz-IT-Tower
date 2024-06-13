import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/website/SITT.png"
import {FaTimes} from "react-icons/fa";
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#352d22] transition">
            <ul className="text-center text-xl p-20">
                <NavLink to="/"
                         spy={true} smooth={true}
                className="inline-block text-white w-full rounded-md p-2 hover:bg-[#ff9501]">
                    <li>خانه</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="inline-block text-white w-full rounded-md p-2 hover:bg-[#ff9501]">
                    <li>پروژه‌ها</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="inline-block text-white w-full rounded-md p-2 hover:bg-[#ff9501]">
                    <li>خدمات</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="inline-block text-white w-full rounded-md p-2 hover:bg-[#ff9501]">
                    <li>مجله ما</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="inline-block text-white w-full rounded-md p-2 hover:bg-[#ff9501]">
                    <li>درباره ما</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="inline-block text-white w-full rounded-md p-2 hover:bg-[#ff9501]">
                    <li>تماس با ما</li>
                </NavLink>
            </ul>
        </div>

    </>
    return (
        <nav className="bg-white shadow-lg">
            <div className="h-10vh flex justify-between z-50 text-gray-900 lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <img src={Logo} className="w-14" />
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[14px]">
                        <NavLink to="/"
                                 spy={true} smooth={true}
                        className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointe">
                            <li>خانه</li>
                        </NavLink>
                        <NavLink to="/"
                                 spy={true} smooth={true}
                                 className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointe">
                            <li>پروژه‌ها</li>
                        </NavLink>
                        <NavLink to="/"
                                 spy={true} smooth={true}
                                 className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointe">
                            <li>خدمات</li>
                        </NavLink>
                        <NavLink to="/"
                                 spy={true} smooth={true}
                                 className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointe">
                            <li>مجله ما</li>
                        </NavLink>
                        <NavLink to="/"
                                 spy={true} smooth={true}
                                 className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointe">
                            <li>درباره ما</li>
                        </NavLink>
                        <NavLink to="/"
                                 spy={true} smooth={true}
                                 className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointe">
                            <li>تماس با ما</li>
                        </NavLink>
                    </ul>
                    </div>
                </div>

                <div>
                    {click && content}
                </div>
                <button className="block md:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes style={{color: "#352d22", fontSize: "24px", fontWeight: "bold"}}/> : <TfiAlignJustify style={{color: "#352d22", fontSize: "24px", fontWeight: "bold"}}/>}
                </button>

            </div>
        </nav>

    );
};

export default Navbar;