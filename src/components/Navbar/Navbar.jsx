import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';

import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/website/SITT.png";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "../../components/Navbar/DarkMode.jsx";





const Navbar = () => {


    return (

        <nav className="fixed top-0 w-full z-10 bg-white shadow-lg">
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-12">
                <div className="flex h-16 justify-between">
                    <div className="flex">

                    <NavLink to="/">
                        <img src={Logo} alt="برج الکترونیک شیراز"
                             className="h-10 w-auto pt-3 cursor-pointer"/>
                    </NavLink>

                    <NavLink to="/"
                    className="flex py-4 px-4 hover:text-primary duration-200">
                        خانه
                    </NavLink>
                    <NavLink to="/"
                     className="flex py-4 px-4 hover:text-primary duration-200">
                        پروژه‌ها
                    </NavLink>
                    <NavLink to="/"
                     className="inline-block py-4 px-4 hover:text-primary duration-200">
                        خدمات
                    </NavLink>
                    <NavLink to="/"
                    className="inline-block py-4 px-4 hover:text-primary duration-200">
                        مجله‌ما
                    </NavLink>
                    <NavLink to="/"
                     className="inline-block py-4 px-4 hover:text-primary duration-200">
                        درباره‌ما
                    </NavLink>
                    <NavLink to="/"
                    className="inline-block py-4 px-4 hover:text-primary duration-200">
                        ارتباط با ما
                    </NavLink>
                    </div>

                    <div className="flex">
                        <div className="inline-block py-4 px-4">
                            <DarkMode />
                        </div>

                        <div className="inline-block py-4 px-4 hover:text-primary duration-200">
                            <button
                                className="relative flex rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105
                        duration-200 text-sm text-white py-1 px-4">
                                پنل‌ها
                                <FaCaretDown
                                    className="cursor-pointer transition-all duration-200 group-hover:rotate-180"/>
                            </button>
                        </div>

                    </div>


                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                        <Disclosure.Button

                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <HiMenuAlt2 className="block h-6 w-6" aria-hidden="true"/>
                            ) : (
                                <HiMenuAlt2 className="block h-6 w-6" aria-hidden="true"/>
                            )}
                        </Disclosure.Button>

                            <NavLink to="/">
                                <img src={Logo} alt="برج الکترونیک شیراز"
                                     className="h-10 w-auto pt-3 cursor-pointer"/>
                            </NavLink>

                            <NavLink to="/"
                                     className="flex py-4 px-4 hover:text-primary duration-200">
                                خانه
                            </NavLink>
                            <NavLink to="/"
                                     className="flex py-4 px-4 hover:text-primary duration-200">
                                پروژه‌ها
                            </NavLink>
                            <NavLink to="/"
                                     className="inline-block py-4 px-4 hover:text-primary duration-200">
                                خدمات
                            </NavLink>
                            <NavLink to="/"
                                     className="inline-block py-4 px-4 hover:text-primary duration-200">
                                مجله‌ما
                            </NavLink>
                            <NavLink to="/"
                                     className="inline-block py-4 px-4 hover:text-primary duration-200">
                                درباره‌ما
                            </NavLink>
                            <NavLink to="/"
                                     className="inline-block py-4 px-4 hover:text-primary duration-200">
                                ارتباط با ما
                            </NavLink>
                        </div>

                        <div className="flex">
                            <div className="inline-block py-4 px-4">
                                <DarkMode />
                            </div>

                            <div className="inline-block py-4 px-4 hover:text-primary duration-200">
                                <button
                                    className="relative flex rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105
                        duration-200 text-sm text-white py-1 px-4">
                                    پنل‌ها
                                    <FaCaretDown
                                        className="cursor-pointer transition-all duration-200 group-hover:rotate-180"/>
                                </button>
                            </div>

                        </div>

                </div>
            </div>
        </nav>


    );
};

export default Navbar;