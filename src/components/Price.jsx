import React from 'react';
import { FcCheckmark } from "react-icons/fc";

const Price = () => {
    return (
        <div className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-800 absolute mix-blend-overlay"></div>

            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl font-bold text-white">انتخاب پنل پیامکی مناسب</h2>
                    <p>سرويس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها و شرکت‌ها</p>
                </div>

                <div className="grid grid-cols-3">
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm">پیشنهاد</span>
                        <div>
                            <p className="text-xl font-bold py-4 flex">۳۵۹ هزارتومان<span
                                className="text-lg text-slate-500 flex flex-col justify-center">/ماهانه</span></p>
                        </div>
                        <p className="text-lg py-4 text-slate-500">ویژه کسب و کارهای در حال رشد</p>
                        <div>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>خط 12 رقمی</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>ارسال پیشرفته</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>پیامک انبوه</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>خرید خط جدید</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>پیامکی بین 70 تا 85 تومان (به میزان
                                خرید بستگی دارد)</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>500 پیامک</p>
                            <button className="w-full px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-full">شروع کنید
                            </button>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm">پیشنهاد</span>
                        <div>
                            <p className="text-xl font-bold py-4 flex">۳۵۹ هزارتومان<span
                                className="text-lg text-slate-500 flex flex-col justify-center">/ماهانه</span></p>
                        </div>
                        <p className="text-lg py-4 text-slate-500">ویژه کسب و کارهای در حال رشد</p>
                        <div>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>خط 12 رقمی</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>ارسال پیشرفته</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>پیامک انبوه</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>خرید خط جدید</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>پیامکی بین 70 تا 85 تومان (به میزان
                                خرید بستگی دارد)</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>500 پیامک</p>
                            <button className="w-full px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-full">شروع کنید
                            </button>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm">پیشنهاد</span>
                        <div>
                            <p className="text-xl font-bold py-4 flex">۳۵۹ هزارتومان<span
                                className="text-lg text-slate-500 flex flex-col justify-center">/ماهانه</span></p>
                        </div>
                        <p className="text-lg py-4 text-slate-500">ویژه کسب و کارهای در حال رشد</p>
                        <div>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>خط 12 رقمی</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>ارسال پیشرفته</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>پیامک انبوه</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>خرید خط جدید</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>پیامکی بین 70 تا 85 تومان (به میزان
                                خرید بستگی دارد)</p>
                            <p className="flex py-3"><FcCheckmark className="mr-5"/>500 پیامک</p>
                            <button className="w-full px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-full">شروع کنید
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;