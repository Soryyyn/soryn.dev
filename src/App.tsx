import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// styles
import styles from "./styles/app.module.scss";

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
            <div className={styles.backgroundContainer}>
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