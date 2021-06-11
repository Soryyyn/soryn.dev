import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./styles/app.scss";

// components
import Navigation from "./components/navigation";
import Background from "./components/background";

// sites
import Home from "./sites/home";

export default function App() {
    // rendered html elements
    return (
        /* react router manages routing and navigation */
        <Router>
            <div id="backgroundContainer">
                <Background />
            </div>
            <Navigation />

            {/* switches between different routes */}
            <Switch>
                {/* default route */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}