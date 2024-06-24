import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
            disable: "mobile",
        });
    }, []);

    return (
        <Router>
            <div>
                <Navbar />
                <Home />
                <Footer />
            </div>
        </Router>
    );
};

export default App;