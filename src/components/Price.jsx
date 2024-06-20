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

                <div>
                    <div>
                        <span>پیشنهاد</span>
                        <div>
                            <p>۳۵۹ هزارتومان<span>/ماهانه</span></p>
                        </div>
                        <p>ویژه کسب و کارهای در حال رشد</p>
                        <div>
                            <p><FcCheckmark className="mr-5"/>خط 12 رقمی</p>
                            <p><FcCheckmark className="mr-5"/>ارسال پیشرفته</p>
                            <p><FcCheckmark className="mr-5"/>پیامک انبوه</p>
                            <p><FcCheckmark className="mr-5"/>خرید خط جدید</p>
                            <p><FcCheckmark className="mr-5"/>پیامکی بین 70 تا 85 تومان (به میزان خرید بستگی دارد)</p>
                            <p><FcCheckmark className="mr-5"/>500 پیامک</p>
                            <button>شروع کنید</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;