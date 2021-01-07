import './Square.css';
import * as Tone from './Tone.js';

function Square(props) {

    const synth = new Tone.Synth().toDestination();

    let selected = false;
    if (props.number === props.beat) {
        selected = true;
        // synth.triggerAttackRelease("C4", "8n");
    }

    return (
        <div className={`square ${selected ? "selected" : ""}`}>
            {props.number}
        </div>
    );
}

export default Square;