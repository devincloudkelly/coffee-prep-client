import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';

export class ShowStepCard extends Component {
    render() {
        const { id, action, duration, amount, order, directions } = this.props.step
        const { currentStep } = this.props
        console.log('current step and id', currentStep, id)
        return (
                (currentStep.id === id 
                ?
                <div className='ui raised card' style={currentStyle}>
                    <h1>{action}</h1>
                    <h3><i class="clock outline icon"></i>{duration}s</h3>
                    <br/>
                </div>
                : 
                <div className='ui raised card'>
                    <h1>{action}</h1>
                    <h3><i class="clock outline icon"></i>{duration}s</h3>
                    <br/>
                </div>
                )
        );
    }
}

const mapState = state => {
    return {
        currentStep: state.currentStep
    }
}

const currentStyle = {
    backgroundColor: 'Orange'
}

export default connect(mapState)(ShowStepCard);
