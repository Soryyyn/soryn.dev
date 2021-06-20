import React from "react";

export default function Custom404() {

    document.title = "404 | soryn.dev"

    return (
        <div>
            <h1>404</h1>
            <p>Looks like you've ended somewhere empty!</p>
            <p>Click the button below to go back to the main page!</p>
        </div>
    );
}