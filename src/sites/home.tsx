import React from "react";
import { Typewriter } from "react-typewriting-effect";

function Home() {

    return (
        <Typewriter
            string="soryn.dev"
            delay={150}
            stopBlinkinOnComplete={false}
            onComplete={() => {
                console.log("finished writing title")
            }}
        />
    );

}

export default Home;