import React from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from "../styles/navigation.module.scss";

export default function Navigation() {

    return (
        <nav>
            <ul>
                <NavLink exact to="/aboutme" activeClassName={styles.activeNavLink}>
                    <li>about me</li>
                </NavLink>
                <NavLink exact to="/" activeClassName={styles.activeNavLink}>
                    <li>home</li>
                </NavLink>
                <NavLink exact to="/m152" activeClassName={styles.activeNavLink}>
                    <li>m152</li>
                </NavLink>
            </ul>
        </nav>
    );
}