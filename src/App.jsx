import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar.jsx";
import HomePage from "../src/pages/HomePage.jsx";
import Footer from "../src/components/Footer/Footer.jsx";


const App = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default App;