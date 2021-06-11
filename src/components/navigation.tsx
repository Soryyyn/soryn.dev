import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";


export default function Navigation() {

    return (
        <nav>
            <ul>
                <NavLink exact to="/aboutme" activeClassName="activeNavLink">
                    <li>about me</li>
                </NavLink>
                <NavLink exact to="/" activeClassName="activeNavLink">
                    <li>home</li>
                </NavLink>
                <NavLink exact to="/m152" activeClassName="activeNavLink">
                    <li>m152</li>
                </NavLink>
            </ul>
        </nav>
    );
}