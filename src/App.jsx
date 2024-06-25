import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar.jsx";
import HomePage from "../src/pages/HomePage.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import Aos from "aos";
import "aos/dist/aos.css";


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
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default App;