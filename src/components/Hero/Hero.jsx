import React from 'react';

const Hero = () => {
    return <>
        <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center
         items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* textt-content section */}
                    <div
                        className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-right order-2 sm:order-1">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            برج IT شیراز
                        <p className="bg-clip-text text-transparent
                        bg-gradient-to-b from-orange-700 text-left text-sm to-orange-400">
                            شرکت برج الکترونیک شیراز
                        </p>
                        </h1>
                        <p className="text-sm">
                            برج الکترونیک شیراز با هدف گسترش کاربرد فناوری اطلاعات و ارتباطات در کشور و جلب سرمایه‌گذاری خارجی با بهره‌گیری از فرصت‌ها و ظرفیت‌های ارزشمند استان فارس در سال 1383 به عنوان نخستین برج الکترونیک کشور در شیراز تأسیس شد.
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-orange-700 to-orange-400 hover:scale-105 duration-200 text-white text-sm py-2 px-3 rounded-full">بیشتر بخوانید</button>
                        </div>
                    </div>
                    {/* image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">

                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Hero;