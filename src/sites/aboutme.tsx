import React, { useState } from "react";
import { Typewriter } from "react-typewriting-effect";

// imgs
import profileImg from "../../public/assets/profile.jpg";

// styles
import styles from "../styles/aboutme.module.scss";

export default function AboutMe() {

    document.title = "about me | soryn.dev"
    const [titleStatus, setTitleStatus] = useState(false);

    return (
        <div className={styles["profile-container"]}>
            <img id={styles["profile-img"]} src={profileImg} />
            <Typewriter
                string="Hi! My name is Soryn"
                delay={150}
                onComplete={() => { setTitleStatus(true); }}
                className={styles.typewriter}
                cursorClassName={(titleStatus == true) ? styles.typewriterCursor : ""}
            />
            <p>I'm a software developer in the second to last year of my apprenticeship at <a href="siemens.com">Siemens AG, Zürich.</a><br />I'm familiar with the Vue, React, Angular, Typescript, Javascript, Java, C#, SQL and a bit of C & C++.<br />Through my personal & work projects I got schooled in managing MongoDB, MySQL and SQLite Databases.</p>
        </div>
    );
}