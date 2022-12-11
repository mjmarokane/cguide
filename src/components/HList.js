import React from 'react';

/* HTileList - Horizontal tile list container
 * htl - Horizontal tile list */

/**
 * A horizontal list wrapper/container
 * @param props - object with a props.list and props.title property
 * props.list - Array of any JSX components
 * props.title - List title
 */
export default function HList(props) {
    return (
        <div className="hl-container">
            <h2 className="hl-title">{props.title}</h2>
            <div className="hl">
                {props.list}
            </div>
        </div>
    );
}