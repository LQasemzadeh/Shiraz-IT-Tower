import React from 'react';
import Hero from "../components/Hero.jsx";
import AdsBar from "../components/AdsBar.jsx";
import Projects from "../components/Projects.jsx";
import Price from "../components/Price.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";


const Home = () => {

    return (
        <div>
            <Hero />
            <Services />
            <Projects />
            <Price />
            <AdsBar />
            <Contact />


        </div>
    );
};
export default Home;