import React, { useState, useEffect } from 'react';
import './BeatIndicator.css';

function BeatIndicator(props) {
    let selected = false;
    if (props.number === props.beat) {
        selected = true;
    }

    return (
        <div
            className={`beat-indicator ${selected ? "beat-selected" : ""}`}
        >
        </div>
    );
}

export default BeatIndicator;