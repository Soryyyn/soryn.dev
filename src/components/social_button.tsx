import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// types
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// styles
import styles from "../styles/social_button.module.scss";

export default function SocialButton({ faIconElement, link }: {
    faIconElement: IconDefinition,
    link: string
}) {

    return (
        <a className={styles.socialButton} href={link}>
            <FontAwesomeIcon icon={faIconElement} />
        </a>
    );

}