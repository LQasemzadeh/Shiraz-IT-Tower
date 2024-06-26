import React from 'react';
import { data } from "../assets/data/data.js";
import {useState} from 'react';
import { ActiveCard } from "./ActiveCard.jsx";
import InactiveCard from "./InactiveCard.jsx";

const Projects = () => {

    const [activeCard, setActiveCard] = useState(1);

    return (
        <div>
            <div className="m-auto md:px-16 px-5 py-16 text-black">
                {/*header text*/}
                <div data-aos="fade-down" className="text-center mx-auto">
                    <h1 className='text-3xl font-semibold text-center lg:text-start'>{data.title}</h1>
                    <p className="mt-4 text-center lg:text-start">{data.subTitle}</p>
                </div>
                {/*Accordion*/}
                <div data-aos="fade-up" className='flex items-center justify-center mx-auto my-16'>
                    <div className='flex gap-3 lg:flex-row flex-col w-full h-full'>
                        {data.accordionData.map(({id, title, subtitle, img, colorDeep, colorLite}) => (
                            <div
                                key={id}
                                onClick={() => setActiveCard(id)}
                                className={`${activeCard === id ? 'lg:grow-[5] lg:max-w-full h-[250px]' : 'h-[70px]'} lg:h-auto duration-700 ease-in-out relative flex-grow overflow-hidden rounded-2xl transition-all border border-gray-200`}
                            >
                                {activeCard === id ? (
                                    <ActiveCard
                                        colorLite={colorLite}
                                        colorDeep={colorDeep}
                                        id={id}
                                        title={title}
                                        subtitle={subtitle}
                                        img={img}
                                        activeCard={activeCard}
                                    />
                                ) : (<InactiveCard
                                    colorDeep={colorDeep}
                                    colorLite={colorLite}
                                    id={id}
                                    title={title}
                                />)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;