import React from 'react';
import Hero from "../components/Hero.jsx";
import AdsBar from "../components/AdsBar.jsx";
import Projects from "../components/Projects.jsx";
import Price from "../components/Price.jsx";


const Home = () => {

    return (
        <div>
            <Hero />
            <Projects />
            <Price />
            <AdsBar />


        </div>
    );
};
export default Home;