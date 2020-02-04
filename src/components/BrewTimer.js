import React, { Component } from 'react';
import Timer from 'react-compound-timer'

export class BrewTimer extends Component {

    renderCheckpoints = () => {
        console.log('rendering checkpoints...')
    }

    render() {
        console.log('these are my checkpoints..', this.props.checkpoints)
        return (
            <div>
                This is the timer
                <Timer className='timer' startImmediately={false}
                    checkpoints={this.props.checkpoints}>
                         {({start, resume, pause, stop, reset, timerState}) => (
                             <div>

                             <h1><Timer.Minutes/> : <Timer.Seconds/> : <Timer.Milliseconds/></h1>
                            <div>{timerState}</div>
                            <br/>
                            <div>
                                <button onClick={start}>Start</button>
                                <button onClick={pause}>Pause</button>
                                <button onClick={resume}>Resume</button>
                                <button onClick={stop}>Stop</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                             </div>
                         )}
                </Timer>
            </div>
        );
    }
}

export default BrewTimer;
