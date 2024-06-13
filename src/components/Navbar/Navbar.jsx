import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/website/SITT.png"

const Navbar = () => {
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-800 transition">
            <ul className="text-center text-xl p-20">
                <NavLink to="/"
                         spy={true} smooth={true}
                className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <li>خانه</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <li>پروژه‌ها</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <li>خدمات</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <li>مجله ما</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <li>درباره ما</li>
                </NavLink>
                <NavLink to="/"
                         spy={true} smooth={true}
                         className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
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
            </div>

        </nav>

    );
};

export default Navbar;