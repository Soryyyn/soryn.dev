import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from "./navigation";
import "./styles/app.scss";

// sites
import Home from "./sites/home";

export default function App() {


    // rendered html elements
    return (
        <div id="app">

            {/* react router
        manages routing and navigation */}
            <Router>
                <Navigation />

                {/* switches between different routes */}
                <Switch>
                    {/* default route */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}