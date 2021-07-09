import React from "react";

// styles
import styles from "../styles/m152.module.scss";

// imgs
import wireframeHome from "../../public/assets/wireframe_home.png";
import wireframeAboutme from "../../public/assets/wireframe_aboutme.png";
import wireframeM152 from "../../public/assets/wireframe_m152.png";
import googleSpeedDesktop from "../../public/assets/google_speed_insight_desktop.png";
import googleSpeedMobile from "../../public/assets/google_speed_insight_mobile.png";
import testImgJPG from "../../public/assets/test_img.jpg";
import testImgPNG from "../../public/assets/test_img.png";
import testImgWEBP from "../../public/assets/test_img.webp";
import musicMP3 from "../../public/assets/music.mp3";
import musicFLAC from "../../public/assets/music.flac";
import musicWAV from "../../public/assets/music.wav";

export default function M152() {

    return (
        <div className={styles.container}>
            <div className={[styles["page-description"], styles["is-visible"]].join(" ")}>
                <p>On this page various elements required by the module 152 are listed/explained here.</p>
                <p>You can directly access various subjects of this page, by searching with this link: soryn.dev/m152#<i>WHAT-YOURE-SEARCHING-FOR</i> and replace the italic text!</p>
            </div >

            <section id="book_and_create" className={[styles["m152-criteria"], styles["is-visible"]].join(" ")}>
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
                    <img src={wireframeHome} alt="wireframe of home route" />
                    <img src={wireframeAboutme} alt="wireframe of about me route" />
                    <img src={wireframeM152} alt="wireframe of home m152 route" />
                </p>
            </section>

            <section id="images" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Images</h1>
                <p className={styles["criteria-text"]}>
                    In this section im going to compare image file types, what the differences of them are, and why to use or why not to use them.
                </p>

                <h2 className={styles["criteria-sub-title"]}>.png</h2>
                <p className={styles["criteria-text"]}>
                    <img src={testImgPNG} alt="png example image" />
                    <br />
                    This image is <b>313kb</b> in size.
                    <br />
                    <br />
                    PNG ist probably the best filetype in type of quality. It doesn't compress images at all, so they keep the small details, in cost of filesize.
                </p>

                <h2 className={styles["criteria-sub-title"]}>.jpg (or .jpeg)</h2>
                <p className={styles["criteria-text"]}>
                    <img src={testImgJPG} alt="png example image" />
                    <br />
                    This image is <b>90.9kb</b> in size.
                    <br />
                    <br />
                    JPG images are a lot smaller in size, because they compress the image by removing unnecessary details which probably won't be noticed at first glance. That's why the load a lot fast, but aren't as beautiful.
                </p>

                <h2 className={styles["criteria-sub-title"]}>.webp</h2>
                <p className={styles["criteria-text"]}>
                    <img src={testImgWEBP} alt="png example image" />
                    <br />
                    This image is <b>243kb</b> in size.
                    <br />
                    <br />
                    WEBP images are a lot like jpg images. It also compresses the images to make them load faster/lighter on the disk. The main difference is, that they can also have small animations like gifs for example.
                </p>
            </section>

            <section id="audios" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Audios</h1>
                <p className={styles["criteria-text"]}>
                    In this section im going to compare audio file types, what the differences of them are, and why to use or why not to use them.
                </p>

                <h2 className={styles["criteria-sub-title"]}>.mp3</h2>
                <p className={styles["criteria-text"]}>
                    <audio controls>
                        <source src={musicMP3} type="audio/mp3" />
                    </audio>
                    <br />
                    <br />
                    This audio file is <b>3.66 MB</b> with <b>320 kbps</b> in size.
                    <br />
                    <br />
                    MP3 audio files are probably the most used audio file and most people know what they are. The filesize depends on the type of compression used, and bit rate. They are on the lower side of filesize tough.
                </p>

                <h2 className={styles["criteria-sub-title"]}>.flac</h2>
                <p className={styles["criteria-text"]}>
                    <audio controls>
                        <source src={musicFLAC} type="audio/flac" />
                    </audio>
                    <br />
                    <br />
                    This audio file is <b>96 MB</b> in size.
                    <br />
                    <br />
                    FLAC files are completely lossless audio files, which is why they are used by music studios and such because, all of the small details in the high end remain unchanged. Altough, the filesize takes big hit from it.
                </p>

                <h2 className={styles["criteria-sub-title"]}>.wav</h2>
                <p className={styles["criteria-text"]}>
                    <audio controls>
                        <source src={musicWAV} type="audio/wav" />
                    </audio>
                    <br />
                    <br />
                    This audio file is <b>32.2 MB</b> in size.
                    <br />
                    <br />
                    The WAV audio file format is made by Microsoft, and hence is used all over the place in the operating system. WAV files are also not compressed and are more widely used than FLACs because they much lighter in filesize than them.
                </p>
            </section>

            <section id="cookies" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Cookies</h1>
                <p className={styles["criteria-text"]}>
                    There only is 1 cookie on this website and it doesn't do anything, except decided wether the cookie banner/notification is shown.
                    <br />
                    <br />
                    If the users visited the page, and no cookie is found, the banner/notification is shown. If the users clicks any of the two buttons, the banner gets hidden. If the users clicked accept the banner isn't shown again, because the cookies gets created and saved and as already said, if a cookie has been found = no banner/notification. If the user clicks decline, the banner only gets hidden, but no cookie gets created.
                </p>
            </section>

            <section id="animations" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Animations</h1>
                <p className={styles["criteria-text"]}>
                    Except for the background, quite of the animations are subtle and kept to a minimum.
                    <br />
                    <br />
                    As already mentioned, this website uses <b>threejs</b> to make use of 3D WebGL. It is used only for the background. I chose to use threejs on this website, because I've never used it in a project before, and wanted to get used to it. It is within an HTML canvas, where a couple of things live.
                    <br />
                    First and foremost, there are <b>exactly</b> four blue colored cubes, which get teleported back to the bottom and change to a random position/rotation/scale. Which makes it look like there are more of them.
                    <br />
                    There also are 2 light sources. One of them is a global illumination like the sun, called <i>ambient light</i> and a <i>point light</i> which is of to the right of the screen. It shines a background colored light at the cubes from an angle. Which makes them look quite pinkish/purpleish, instead of only blue. If there wouldn't be any light sources, the cubes would look black, even if they're colored blue.
                    <br />
                    <br />
                    The second type of animation used are used for special titles, which looks like a typewrites effect. For that I use a package, called <a href="https://www.npmjs.com/package/react-typing-effect">react-typewriting-effect</a> which makes it really easy to create such an effect.
                    <br />
                    I only changed the delay for each character to appear and make the cursor blink (which the package should've already have done, but it didn't so I manually made a CSS keyframes animation for it).
                    <br />
                    <br />
                    The third animation is seen in the <i>about me</i> page/route, when hovered over the image. It rotates through to whole hue spectrum and repeats this infinitly. I discovered it by playing around with CSS filters! E.g.:

                    <img src={testImgJPG} alt="hue rotate example" className={styles["hue-rotate-example"]} />
                    <br />
                    The last animation is seen on the home route on the little social buttons and the cookie banner/notification. It fades the element in if wanted and moves it in from the bottom or top, which is all there is to it.
                </p>
            </section>

            <section id="performance" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Site performance</h1>
                <p className={styles["criteria-text"]}>
                    Because this site has been made with React, there is a lot to think about performance, because React is a <b>HUGE</b> Framework in size. I thought about using <a href="https://preactjs.com/">Preact</a> which is kind of the same as React but keeps the Framework size down to under 1mb, and such improves performance automatically. But I couldn't get threejs to work with it, so I stuck to React. Plus, the whole background is a canvas animation with 3D meshes, which obviously increase page loading times. That's why I chose to do the following solutions:

                    <ul>
                        <li>Switch the website to a loading state whenever something big is loaded, e.g.: the background</li>
                        <li>Preloading all sites/routes before entering the ready state of the site, which will also trigger page loading component</li>
                        <li>The page loading component also drastically, improves accessability by making the first user input available much quicker rather than waiting for the whole website to load</li>
                        <li>By keeping the background component the same across all pages/routes and not unloading it and loading it again after a page switch, makes it much faster to switch pages</li>
                        <li>Keeping the image sizes to a minimum, by compressing them to a point, where small details are still distinguishable</li>
                    </ul>
                </p>

                <h2 className={styles["criteria-sub-title"]}>Google speed insight for desktop</h2>
                <p className={styles["criteria-text"]}>
                    <img src={googleSpeedDesktop} alt="google speed insight on desktop" />
                </p>

                <h2 className={styles["criteria-sub-title"]}>Google speed insight for mobile</h2>
                <p className={styles["criteria-text"]}>
                    <img src={googleSpeedMobile} alt="google speed insight on mobile devices" />
                </p>
            </section>

            <section id="imprint" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Imprint</h1>

                <h2 className={styles["criteria-sub-title"]}>Contact address</h2>
                <p className={styles["criteria-text"]}>
                    Soryn Bächli<br />
                    Casting street 50<br />
                    8180 Bülach<br />
                    Switzerland<br />
                    <br />
                    E-mail:<br />
                    soryn.baechli@gmail.com<br />
                </p>

                <h2 className={styles["criteria-sub-title"]}>Disclaimer</h2>
                <p className={styles["criteria-text"]}>
                    The author assumes no responsibility for the correctness, accuracy, timeliness, reliability and completeness of the information.
                    Liability claims regarding damage caused by the use of any information provided, including any kind of information which is incomplete or incorrect, will therefore be rejected.
                    <br />
                    <br />
                    All offers are non-binding. Parts of the pages or the complete publication including all offers and information might be extended, changed or partly or completely deleted by the author without separate announcement.
                </p>

                <h2 className={styles["criteria-sub-title"]}>Disclaimer for links</h2>
                <p className={styles["criteria-text"]}>
                    References and links to third party websites are beyond our responsibility. Any responsibility for such websites is declined. The access and use of such websites is at the own risk of the respective user.
                </p>

                <h2 className={styles["criteria-sub-title"]}>Copyrights</h2>
                <p className={styles["criteria-text"]}>
                    The copyrights and all other rights to the content, images, photos or other files on this website belong exclusively to Soryn Bächli or to the specifically named copyright holders. The written consent of the copyright holder must be obtained in advance for the reproduction of any elements.
                </p>
            </section>

            <section id="sources" className={styles["m152-criteria"]}>
                <h1 className={styles["criteria-main-title"]}>Sources</h1>
                <p className={styles["criteria-text"]}>
                    The images/videos of this website which are not made by me are listed below:

                    <ul>
                        <li><a href="https://www.shutterstock.com/de/image-photo/abstract-ocean-art-natural-luxury-style-1040400583">hue rotationg example image</a></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </p>
            </section>
        </div>
    );
}