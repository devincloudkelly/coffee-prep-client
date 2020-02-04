import React, { Component } from 'react';
import Timer from 'react-compound-timer'
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';

export class BrewTimer extends Component {


    handleStepChange = (step) => {
        console.log('handling step change from checkpoint callback...' ,step)
        // this.updateCurrentStep(step)
    }

    render() {
        return (
            <div>
                This is the timer
                <Timer className='timer' startImmediately={false}
                    checkpoints={this.props.checkpoints()}>
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

const mapState = state => {
    return {
        currentPrep: state.currentPrep
    }
}

// const mapDispatch = dispatch => {
//     console.log('is dispatch being called')
//     return {
//         updateCurrentStep: step => dispatch(CoffeeAction.updateCurrentStep(step))
//     }
// }

export default connect(mapState)(BrewTimer);
