import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
        </Router>
    );
};

export default App;