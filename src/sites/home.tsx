import React from "react";
import { Typewriter } from "react-typewriting-effect";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// components
import SocialButton from "../components/social_button";

// styles
import styles from "../styles/home.module.scss";

export default function Home() {

    return (
        <>
            <div className={styles.titleContainer}>
                <Typewriter
                    string="soryn.dev"
                    delay={150}
                    stopBlinkinOnComplete={false}
                    onComplete={() => { }}
                    className={styles.typewriter}
                />
            </div>
            <div className={styles.socials}>
                <SocialButton faIconElement={faGithub} link="https://github.com/Soryyyn" />
                <SocialButton faIconElement={faTwitter} link="https://twitter.com/dev_soryn" />
                <SocialButton faIconElement={faEnvelope} link="mailto:soryn.baechli@gmail.com" />
            </div>
        </>

    );

}