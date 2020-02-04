import React, { Component } from 'react';
import Timer from 'react-compound-timer'

export class BrewTimer extends Component {
    render() {
        return (
            <div>
                This is the timer
                <Timer className='timer' 
                    checkpoints={[
                        {
                            time: 5000,
                            callback: () => console.log('5 seconds'),
                        },
                        {
                            time: 20000,
                            callback: () => console.log('20 seconds'),
                        }
                     ]}>
                    <h1><Timer.Minutes/> : <Timer.Seconds/> : <Timer.Milliseconds/></h1>
                </Timer>
            </div>
        );
    }
}

export default BrewTimer;
