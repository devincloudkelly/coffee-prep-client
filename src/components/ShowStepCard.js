import React, { Component } from 'react';
import { Icon, Card } from 'semantic-ui-react'
import { connect } from 'react-redux';

export class ShowStepCard extends Component {
    render() {
        const { id, action, duration, amount, order, directions } = this.props.step
        const { currentStep } = this.props
        console.log('current step and id', currentStep, id)
        return (
                (currentStep.id === id 
                ?
                <Card  color='grey' raised style={currentStyle}>
                    <h1>{action}</h1>
                    <h3><i class="clock outline icon"></i>{duration}s</h3>
                    <br/>
                </Card>
                : 
                <Card  raised color='grey'>
                    <h1>{action}</h1>
                    <h3><i class="clock outline icon"></i>{duration}s</h3>
                    <br/>
                </Card>
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
