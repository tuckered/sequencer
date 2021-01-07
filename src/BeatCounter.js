import React, { useState, useEffect } from 'react';
import Square from './Square';
import './BeatCounter.css';

function BeatCounter() {
    const [beat, setBeat] = useState(1);
    const beatsInBar = 8;
    const tempo = 1500;

    useEffect(() => {
        while (beat < beatsInBar) {
            setTimeout(() => {
                setBeat(beat + 1)
            }, tempo);
            return () => clearTimeout();
        }
        setTimeout(() => {
            setBeat(1);
        }, tempo);
        return () => clearTimeout();
    })

    return (
        <div className="beatCounter">
            <Square number={1} beat={beat} />
            <Square number={2} beat={beat} />
            <Square number={3} beat={beat} />
            <Square number={4} beat={beat} />
            <Square number={5} beat={beat} />
            <Square number={6} beat={beat} />
            <Square number={7} beat={beat} />
            <Square number={8} beat={beat} />
        </div>
    );
}

export default BeatCounter;