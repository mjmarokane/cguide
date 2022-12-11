import React from 'react';

export default function Tile(props) {
    return (
        <a className="tile" href={props.link}>
            <img className="tile-image" src={props.image.src} alt={props.image.alt} />
            <div className="tile-content">
                <h3 className="tile-title">{props.title}</h3>
                <p className="tile-description">{props.description}</p>
            </div>
        </a>
    );
}