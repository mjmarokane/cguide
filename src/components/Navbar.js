import React from 'react';

export default function Navbar(props) {
    let classNames = "";
    if (props.transparent) {
        classNames += "transparent";
    }

    return (
        <nav className={`navbar ${classNames}`}>
            <h2 className="brand-name"><a href="./index.html"><span>c</span>Guide</a></h2>
            <ul className="nav-links">
                <li><a href=".">About</a></li>
                <li><a href=".">Contact</a></li>
            </ul>
        </nav>
    );
}