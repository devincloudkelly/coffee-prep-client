import React, { Component } from 'react';
import Timer from 'react-compound-timer'
import { connect } from 'react-redux';
import { Segment, Button } from 'semantic-ui-react'

export class BrewTimer extends Component {

    handleReset = () => {
        this.props.reset()
    }

    handleStart = () => {
        this.props.start()
    }
    handlePause = () => {
        this.props.pause()
    }

    render() {
        return (
            <Segment inverted>
                <div style={{textAlign: 'center'}}>

                <Timer 
                    className='timer' 
                    startImmediately={false} 
                    formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
                    checkpoints={this.props.checkpoints}
                    onReset={this.handleReset}
                    onStart={this.handleStart}
                    onPause={this.handlePause}
                    >
                         {({start, pause, reset}) => (
                             <div>

                             <h1 className='brewTimer'><Timer.Minutes/> : <Timer.Seconds/></h1>
                       
                            <br/>
                            <Button.Group >
                                <Button onClick={start} >Start</Button>
                                <Button onClick={pause} >Pause</Button>
                                <Button onClick={reset} >Reset</Button>
                            </Button.Group>
                             </div>
                         )}
                </Timer>
                         </div>
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


export default connect(mapState)(BrewTimer);
