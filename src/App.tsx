import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// utils
import { lazyPreloadRoute } from "./util/preload"

// styles
import styles from "./styles/app.module.scss";

// components
import Navigation from "./components/navigation";
import Loading from "./components/loading";

// lazy load bg
const Background = React.lazy(() => import("./components/background"));

// preload all sites
const promHome = import("./sites/home");
const promAboutMe = import("./sites/aboutme");
const prom404 = import("./sites/404");
const Home = lazyPreloadRoute(promHome);
const AboutMe = lazyPreloadRoute(promAboutMe);
const Custom404 = lazyPreloadRoute(prom404);

export default function App() {
    // rendered html elements
    return (
        /* react router manages routing and navigation */
        <Router>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
        </Router>
    );
}