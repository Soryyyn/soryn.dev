import React from "react";

// styles
import styles from "../styles/m152.module.scss";

export default function M152() {

    return (
        <div className={styles.container}>
            <div className={styles["page-description"]}>
                <p>On this page various elements required by the module 152 are listed/explained here.</p>
                <p>You can directly access various subjects of this page, by searching with this link: soryn.dev/m152#<i>WHAT-YOURE-SEARCHING-FOR</i> and replace the italic text!</p>
            </div >

            <section id="book_and_create" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Book & create website</h1>

                <h2 className={styles["criteria-sub-title"]}>Booking</h2>
                <p className={styles["criteria-text"]}>
                    Because I already had a domain, I didn't have to book one. Because this project uses Github for multiple purposes, I connected it to <a href="https://www.netlify.com">Netlify</a> for hosting. Whenever a new push or pull request has been registered in the project repository, it redeploys the website under the <a href="m152.soryn.dev">m152.soryn.dev</a>.
                </p>

                <h2 className={styles["criteria-sub-title"]}>Creating</h2>
                <p className={styles["criteria-text"]}>
                    Because I didn't want to use a template, I chose to write whole website from scratch with <a href="https://reactjs.org">React</a>. Not only because I've never really coded a big static site but also a big site with React. It also makes use of multiple libaries/packages to extend its functionality.
                    <br />
                    I also chose to learn the basics of <a href="https://threejs.org">threejs</a>. Threejs is a 3D WebGL framework to create basically anything. You see its use in the background of the whole application.
                </p>
            </section>

            <section id="storytelling_mockup_wireframe" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Storytelling, Mockup & Wireframe</h1>

                <h2 className={styles["criteria-sub-title"]}>tbd</h2>
                <p className={styles["criteria-text"]}>
                    tbd
                </p>
            </section>
        </div>
    );
}