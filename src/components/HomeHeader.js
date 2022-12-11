import React from 'react';
import Navbar from './Navbar';
import background from '../images/graduation.jpg';

export default function HomeHeader() {
    const styleObj = {
        backgroundImage: `url(${background})`
    };

    return (
        <header className="page-header" style={styleObj}>
            <Navbar transparent={true} />
            <form role="search">
                <h3>What do you want to stand for? Who do you want to be?</h3>
                <input 
                    className="search"
                    type="search" 
                    placeholder="Search a career, course or profession..."
                    />
                <p>This is the place to explore careers, courses and professions.</p>
            </form>
        </header>
    );
}