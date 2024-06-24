import React from 'react';
import Item from "../../components/Footer/Item.jsx";
import { PRODUCTS, RESOURCES, COMPANY } from "../../components/Footer/Menus.js";
import enamad from '../../assets/images/enamad_logo.png';

const ItemsContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <Item Links={PRODUCTS} title="لینک‌های مهم"/>
            <Item Links={RESOURCES} title="خدمات مشتریان"/>
            <Item Links={COMPANY} title="اطلاعات تماس"/>
            <img src={enamad} alt="Enamad Logo" />
        </div>
    );
};
export default ItemsContainer;