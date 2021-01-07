import React, { useState, useEffect } from 'react';
import * as Tone from '../Tone.js';
import './Square.css';

function Square(props) {

    const synth = new Tone.Synth().toDestination();

    let selected = false;
    if (props.number === props.beat) {
        selected = true;
    }

    const [noteSelected, setNoteSelected] = useState(false);
    function toggleNoteSelect() {
        console.log(noteSelected);

        if (noteSelected) { setNoteSelected(false) }
        else { setNoteSelected(true) }
    }

    if (noteSelected === true && selected === true) {
        synth.triggerAttackRelease(`${props.note}`, "8n");
    }

    return (
        <div
            className={`square ${noteSelected ? "note-selected" : ""}`}
            onClick={toggleNoteSelect}
        >
        </div>
    );
}

export default Square;