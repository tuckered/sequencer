import BeatIndicator from './BeatIndicator';
import './BeatCounter.css';

function BeatCounter(props) {

    return (
        <div className="beatCounter">
            <BeatIndicator number={1} beat={props.beat} />
            <BeatIndicator number={2} beat={props.beat} />
            <BeatIndicator number={3} beat={props.beat} />
            <BeatIndicator number={4} beat={props.beat} />
            <BeatIndicator number={5} beat={props.beat} />
            <BeatIndicator number={6} beat={props.beat} />
            <BeatIndicator number={7} beat={props.beat} />
            <BeatIndicator number={8} beat={props.beat} />
        </div>
    );
}

export default BeatCounter;