import React, {useState} from 'react';
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from "../../assets/images/SITT.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-14 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img src={Logo} className="h-8 w-auto"/>
                    <ul className="hidden md:flex">
                        <li className="p-4"><Link to="/">خانه</Link></li>
                        <li className="p-4"><Link to="/projects">پروژه‌ها</Link></li>
                        <li className="p-4"><Link to="/services">خدمات</Link></li>
                        <li className="p-4"><Link to="/news">اخبار</Link></li>
                        <li className="p-4"><Link to="/about">درباره ما</Link></li>
                        <li className="p-4"><Link to="/contact">تماس با ما</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-md">پنل‌ها</button>
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
                    <Link to="/projects">پروژه‌ها</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/services">خدمات</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/news">اخبار</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/about">درباره ما</Link>
                </li>
                <li className="p-4 border-b-2 border-zinc-300 w-full text-center">
                    <Link to="/contact">تماس با ما</Link>
                </li>
                <div className="flex flex-col my-4">
                    <button className="px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-md">پنل‌ها</button>
                </div>
            </ul>
        </div>
    );
};
export default Navbar;