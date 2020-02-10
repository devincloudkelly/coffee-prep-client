import React, { Component } from 'react';
import Timer from 'react-compound-timer'
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';
import {Segment, Button, Statistic} from 'semantic-ui-react'

export class BrewTimer extends Component {


    handleStepChange = (step) => {
        console.log('handling step change from checkpoint callback...' ,step)
        // this.updateCurrentStep(step)
    }

    render() {
        return (
            <Segment inverted>
                <Timer 
                    className='timer' 
                    startImmediately={false} 
                    formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
                    checkpoints={this.props.checkpoints}
                    >
                         {({start, pause, reset}) => (
                             <div>

                             <h1 className='brewTimer'><Timer.Minutes/> : <Timer.Seconds/> : <Timer.Milliseconds/></h1>
                       
                            <br/>
                            <Button.Group>
                                <Button onClick={start}>Start</Button>
                                <Button onClick={pause}>Pause</Button>
                                <Button onClick={reset}>Reset</Button>
                            </Button.Group>
                             </div>
                         )}
                </Timer>
            </Segment>
        );
    }
}

const mapState = state => {
    return {
        currentPrep: state.currentPrep,
        checkpointLength: state.checkpointLength
    }
}

// const mapDispatch = dispatch => {
//     console.log('is dispatch being called')
//     return {
//         updateCurrentStep: step => dispatch(CoffeeAction.updateCurrentStep(step))
//     }
// }

export default connect(mapState)(BrewTimer);
