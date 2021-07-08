import React from "react";

// styles
import styles from "../styles/m152.module.scss";

// imgs
import wireframeHome from "../../public/assets/wireframe_home.png";
import wireframeAboutme from "../../public/assets/wireframe_aboutme.png";

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
                <h1 className={styles["criteria-main-title"]}>Styleguide</h1>
                <p className={styles["criteria-text"]}>
                    My primary goal for this website was to make it appealing to look at, and know your way around without much confusion. That's why I mostly kept my colors to one color.

                    The main & only font this website uses is <a href="https://fonts.google.com/specimen/Fira+Mono">Fira Mono</a>. I chose it because it suited my vision of the website.
                    <br />
                    <br />
                    A special title is styled with a custom typewriter component. Links are shown like <a>this</a> and strong/bold are styled the same as links without the hover color lightening.
                    <br />
                    <br />
                    As already mentioned the colors are mainly kept at a single tone, and don't differ to much.

                    <div className={styles["color-container"]}>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgb(0, 0, 0)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgba(39, 36, 48, 1)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgb(80, 74, 99)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgba(39, 36, 48, 0.6)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgba(39, 36, 48, 0.8)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgba(39, 36, 48, 0.15)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "#9167F8" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgb(0, 0, 255)" }}></div>
                        <div className={styles["color-box"]} style={{ backgroundColor: "rgb(255, 255, 255)" }}></div>
                    </div>

                    Most elements have a default border-radius & box-shadow to keep the design the same.
                    <br />
                    <button className={styles["link-button"]}>test button 1</button>
                    <button className={styles["light-button"]}>test button 2</button>
                    <button className={styles["dark-button"]}>test button 3</button>

                    <br />
                    <br />

                    I used <a href="https://fontawesome.com/">Font Awesome</a> for icons. The logo is created by myself and represents one of the spinning cubes in the background.
                </p>

                <h1 className={styles["criteria-main-title"]}>Wireframe, Mockup & Sitemap</h1>
                <p className={styles["criteria-text"]}>
                    This website only has a few visitable sites. Below this you can see the sitemap. The m152 page has a lot of articles within it, which I won't list in the sitemap, because they aren't sites.

                    <ul>
                        <li>home</li>
                        <li>about me</li>
                        <li>m152</li>
                        <li>404</li>
                    </ul>

                    The wireframes and mockups are made within Adobe XD.
                    <img src={wireframeHome} />
                    <img src={wireframeAboutme} />
                </p>

            </section >
        </div >
    );
}