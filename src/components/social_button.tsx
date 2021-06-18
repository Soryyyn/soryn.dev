import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// types
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function SocialButton({ faIconElement, link }: {
    faIconElement: IconDefinition,
    link: string
}) {

    return (
        <a href={link}>
            <FontAwesomeIcon icon={faIconElement} />
        </a>
    );

}