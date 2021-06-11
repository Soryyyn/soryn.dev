import React from "react";
import { Typewriter } from "react-typewriting-effect";
import "../styles/home.scss";

function Home() {

    return (
        <div id="titleContainer">
            <Typewriter
                string="soryn.dev"
                delay={150}
                stopBlinkinOnComplete={false}
                onComplete={() => { }}
                className="typewriter"
            />
        </div>
    );

}

export default Home;