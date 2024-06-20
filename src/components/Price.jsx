import React from 'react';
import { FcCheckmark } from "react-icons/fc";

const Price = () => {
    return (
        <div>
            <div>Absolute</div>

            <div>
                <div>
                    <h2>انتخاب پنل پیامکی مناسب</h2>
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
                            <p><FcCheckmark/>خط 12 رقمی</p>
                            <p><FcCheckmark/>ارسال پیشرفته</p>
                            <p><FcCheckmark/>پیامک انبوه</p>
                            <p><FcCheckmark/>خرید خط جدید</p>
                            <p><FcCheckmark/>پیامکی بین 70 تا 85 تومان (به میزان خرید بستگی دارد)</p>
                            <p><FcCheckmark/>500 پیامک</p>
                            <button>شروع کنید</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;