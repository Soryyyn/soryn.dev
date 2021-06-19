import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// styles
import styles from "./styles/app.module.scss";

// components
import Navigation from "./components/navigation";
import Background from "./components/background";

// sites
import Home from "./sites/home";
import AboutMe from "./sites/aboutme";
import Custom404 from "./sites/404";

export default function App() {
    // rendered html elements
    return (
        /* react router manages routing and navigation */
        <Router>
            <div className={styles.backgroundContainer}>
                <Background />
            </div>
            <Navigation />

            {/* switches between different routes */}
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/aboutme">
                    <AboutMe />
                </Route>

                {/* 404 route */}
                <Route path="*">
                    <Custom404 />
                </Route>
            </Switch>
        </Router>
    );
}