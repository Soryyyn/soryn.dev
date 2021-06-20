import React from "react";

// styles
import styles from "../styles/loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.loadingStyles}>
            <p>Currently loading...</p>
        </div>
    );
}