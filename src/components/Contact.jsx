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
                     background: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(252,70,107,1)',
                     height: '250px',
                 }}>
                <h1 className="text-5xl sm:text-7xl text-white pt-12">
                    ارتباط با ما
                </h1>
            </div>
            <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
                <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
                    <ul className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
                        <li className="flex gap-x-3">
                            071-32344445
                            <BsTelephone className="h-6 w-5 flex-none text-indigo-600" />
                        </li>
                        <li className="flex gap-x-3">
                            shirazittower1@gmail.com
                            <MdOutlineMailOutline className="h-6 w-5 flex-none text-indigo-600" />
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
                                        label="Name"
                                        placeholder="Enter name here ..."
                                        fieldRef={field}
                                        hasError={errors.name?.type === 'required'}
                                    />
                                )}
                            />

                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <FormElement
                                        type="text"
                                        label="Name"
                                        placeholder="Enter name here ..."
                                        fieldRef={field}
                                        hasError={errors.name?.type === 'required'}
                                    />
                                )}
                            />

                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <FormElement
                                        type="text"
                                        label="Name"
                                        placeholder="Enter name here ..."
                                        fieldRef={field}
                                        hasError={errors.name?.type === 'required'}
                                    />
                                )}
                            />


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;