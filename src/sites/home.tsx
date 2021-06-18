import React from "react";
import { Typewriter } from "react-typewriting-effect";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// components
import SocialButton from "../components/social_button";

// styles
import "../styles/home.scss";

export default function Home() {

    return (
        <>
            <div id="titleContainer">
                <Typewriter
                    string="soryn.dev"
                    delay={150}
                    stopBlinkinOnComplete={false}
                    onComplete={() => { }}
                    className="typewriter"
                />
            </div>
            <SocialButton faIconElement={faGithub} link="https://github.com/Soryyyn" />
        </>

    );

}