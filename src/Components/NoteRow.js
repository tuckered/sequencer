import React, { useState, useEffect } from 'react';
import Square from './Square';
import './NoteRow.css';

function NoteRow(props) {

    return (
        <div className="noteRow">
            <Square number={1} beat={props.beat} note={props.note} />
            <Square number={2} beat={props.beat} note={props.note} />
            <Square number={3} beat={props.beat} note={props.note} />
            <Square number={4} beat={props.beat} note={props.note} />
            <Square number={5} beat={props.beat} note={props.note} />
            <Square number={6} beat={props.beat} note={props.note} />
            <Square number={7} beat={props.beat} note={props.note} />
            <Square number={8} beat={props.beat} note={props.note} />
        </div>
    );
}

export default NoteRow;