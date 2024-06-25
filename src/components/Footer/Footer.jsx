import React from 'react';
import ItemsContainer from "../../components/Footer/ItemsContainer.jsx";
import SocialIcons from "../../components/Footer/SocialIcons.jsx";
import { Icons } from "../../components/Footer/Menus.js";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <div>
                    <input
                        type="text"
                        placeholder="جستجو کنید ..."
                        className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button
                        className="bg-orange-500 hover:bg-orange-400 duration-300 px-5 py-2.5
           rounded-full text-white md:w-auto w-full"
                    >
                        جستجو کنید
                    </button>
                </div>
            </div>
            <ItemsContainer/>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
      text-center pt-2 text-gray-400 text-xs pb-8"
            >
                <span>© کلیه حقوق این وبسایت متعلق به شرکت برج الکترونیک شیراز می‌باشد.</span>

                <SocialIcons Icons={Icons}/>
            </div>
        </footer>
    );
};

export default Footer;