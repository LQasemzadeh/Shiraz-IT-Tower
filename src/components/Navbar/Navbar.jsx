import React, { useState, useRef } from 'react';
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from "../../assets/images/SITT.png"
import { Link } from 'react-router-dom';
import "../../components/Navbar/Navbar.css";



const Navbar = () => {
    const Menus = ['پنل پیامکی', 'پنل مدیریت ساختمان', 'پنل پرداخت یاری']
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const btnRef = useRef();

    const [nav, setNav] = useState(false)
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNav(!nav)

    const changeBackground = () => {
        if(window.scrollY >=80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
     window.addEventListener('scroll', changeBackground);
     window.addEventListener('click', (e) => {
         if (e.target !== menuRef.current && e.target !== btnRef.current) {
             setOpen(false);
         }
     });

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="px-14 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img src={Logo} className="h-8 w-auto"/>
                    <ul className="hidden md:flex">
                        <li className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-30"><Link to="/">خانه</Link></li>
                        <li className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-30"><Link to="/Projects">پروژه‌ها</Link></li>
                        <li className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-30"><Link to="/Services">خدمات</Link></li>
                        <li className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-30"><Link to="/news">اخبار</Link></li>
                        <li className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-30"><Link to="/Hero">درباره ما</Link></li>
                        <li className="p-4 rounded  hover:bg-orange-100 hover:bg-opacity-30"><Link to="/Contact">تماس با ما</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button
                        ref={btnRef}
                        onClick={() => setOpen(!open)}
                        className="px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-full">پنل‌ها</button>
                    {open &&
                        <div
                            ref={menuRef}
                            className="absolute left-8 z-10 mt-10 w-48 origin-top-left rounded-md bg-white py-1
                    shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none
                    data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
                    data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out
                    data-[leave]:ease-in">
                            <ul className="">
                                {Menus.map((menu) => (
                                    <li
                                        onClick={() => setOpen(false)}
                                        className="p-2 cursor-pointer rounded hover:bg-orange-100"
                                        key={menu}>{menu}</li>
                                ))}

                            </ul>
                        </div>
                    }

                </div>
                <div className="md:hidden"
                     onClick={handleClick}
                >
                    {!nav ? <FiAlignJustify className="w-10"/> : <FiX className="w-10"/>}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/">خانه</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/Projects">پروژه‌ها</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/Services">خدمات</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/news">اخبار</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/about">درباره ما</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/Contact">تماس با ما</Link>
                </li>
                <div className="flex flex-col my-4">
                    <button className="px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-full">پنل‌ها</button>
                </div>
            </ul>
        </div>
    );
};
export default Navbar;