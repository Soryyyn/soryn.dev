import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';

// types
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// styles
import styles from "../styles/socialButton.module.scss";

export default function SocialButton({ faIconElement, tooltip, link }: {
    faIconElement: IconDefinition,
    tooltip: string,
    link: string
}) {

    return (
        <Tippy content={tooltip} placement="bottom">
            <a className={styles.socialButton} href={link} >
                <FontAwesomeIcon icon={faIconElement} />
            </a>
        </Tippy>
    );

}