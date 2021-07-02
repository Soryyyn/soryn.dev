import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';


// styles
import styles from "../styles/cookie.module.scss";

export default function CookieNotifier(onChange: any) {

    const [status, setStatus] = useState<Boolean>()

    function handleChange(st: Boolean) {
        setStatus(st);

        if (st) {
            document.cookie = "testCookie=exampleTextInCookie";
        }
    }

    return (
        <div className={(document.cookie.indexOf('testCookie=') != 0) ? styles.cookieContainer : styles.hiddenCookieContainer}>
            <div className={styles.cookieIconContainer}>
                <FontAwesomeIcon icon={faCookieBite} className={styles.cookieIcon} />
            </div>
            <div className={styles.cookieDesc}>
                <p>By clicking <i>accept</i> you agree to the storing of cookies on your device.</p>
                <button onClick={() => handleChange(true)} className={styles.accept}>accept</button>
                <button onClick={() => handleChange(false)} className={styles.deny}>deny</button>
            </div>
        </div>
    );
    // }
}