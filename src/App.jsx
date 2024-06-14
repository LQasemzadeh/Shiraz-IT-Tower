import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Hero />
            </div>
        </Router>
    );
};

export default App;