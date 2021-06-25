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
const preHomeSite = import("./sites/home");
const preAboutMeSite = import("./sites/aboutme");
const pre404Site = import("./sites/404");
const preM152 = import("./sites/m152");
const Home = lazyPreloadRoute(preHomeSite);
const AboutMe = lazyPreloadRoute(preAboutMeSite);
const Custom404 = lazyPreloadRoute(pre404Site);
const M152 = lazyPreloadRoute(preM152);

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
                    <Route path="/m152">
                        <M152 />
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