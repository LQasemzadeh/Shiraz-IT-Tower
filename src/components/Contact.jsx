import React from 'react';
import { useForm, Controller } from "react-hook-form";
import FormElement from "../../src/components/FormElement.jsx";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";


const Contact = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });
    return (
        <div className="xl:container mx-auto mb-32">
            <div className="flex justify-center"
                 style={{
                     background: 'linear-gradient(to bottom, #4b6993, #e9a246)',
                     height: '250px',
                 }}>
                <h1 data-aos="fade-down" className="text-4xl sm:text-5xl text-white pt-12">
                    ارتباط با ما
                </h1>
            </div>
            <div data-aos="fade-up" className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
                <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
                    <ul className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
                        <li className="flex gap-x-3">
                            071-32344445
                            <BsTelephone className="h-6 w-5 flex-none text-orange-600" />
                        </li>
                        <li className="flex gap-x-3">
                            shirazittower1@gmail.com
                            <MdOutlineMailOutline className="h-6 w-5 flex-none text-orange-600" />
                        </li>
                    </ul>
                    <div>
                        <form>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <FormElement
                                        type="text"
                                        label="نام و نام خانوادگی"
                                        placeholder="نام خود را وارد کنید ..."
                                        fieldRef={field}
                                        hasError={errors.name?.type === 'required'}
                                    />
                                )}
                            />

                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <FormElement
                                        type="email"
                                        label="ایمیل"
                                        placeholder="ایمیل خود را وارد کنید ..."
                                        fieldRef={field}
                                        hasError={errors.name?.type === 'required'}
                                    />
                                )}
                            />

                            <Controller
                                name="message"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <FormElement
                                        type="textarea"
                                        label="پیام شما"
                                        placeholder="پیام خود را بنویسید ..."
                                        fieldRef={field}
                                        hasError={errors.name?.type === 'required'}
                                    />
                                )}
                            />

                            <button type="submit" className="w-full px-5 py-1 text-white border-2 bg-[#ff9500] border-[#352d22]
        hover:bg-transparent hover:text-[#352d22] rounded-full">
                                ارسال پیام
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;