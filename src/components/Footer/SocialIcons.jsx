import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";

const iconsArray = [
    {
        name: 'اینستاگرام',
        icon: <FaInstagram />,
    },
    {
        name: 'تلگرام',
        icon: <PiTelegramLogoBold />,
    },
    {
        name: 'واتس‌اپ',
        icon: <BsWhatsapp />,
    },
    {
        name: 'یوتوپ',
        icon: <TbBrandYoutube />,
    },
]
const SocialIcons = ({ icons = iconsArray }) => {
    return (
        <div className="text-orange-500">
            {icons.map((icon) => (
                <span
                    key={icon.name}
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500
        duration-300 "
                >
          {icon.icon}
        </span>
            ))}
        </div>
    );
};
export default SocialIcons;