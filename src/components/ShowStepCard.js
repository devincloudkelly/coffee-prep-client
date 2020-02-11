import React, { Component } from 'react';
import { Icon, Card } from 'semantic-ui-react'
import { connect } from 'react-redux';

export class ShowStepCard extends Component {

    renderStepAction = (action) => {
        switch (action) {
            case 'bloom':
                return 'Bloom'
            case 'pour':
                return 'Pour'
            case 'stir':
                return 'Stir'
            case 'wait':
                return 'Wait'
            case 'press':
                return 'Press'
            default:
                break;
        }
    }

    render() {
        const { id, action, duration, amount } = this.props.step
        const { currentStep } = this.props
        console.log('current step and id', currentStep, id)
        return (
                (currentStep.id === id 
                ?
                <Card fluid color='grey' style={currentStyle}>

                    <Card.Content >
                    <Card.Header>{this.renderStepAction(action)}</Card.Header>
                    <Card.Description>
                        <Icon name="clock outline"/>{duration}s <br/>
                        <Icon name='tint'/>{amount}ml
                    </Card.Description>
                    </Card.Content>
                    {/* <Progress percent={45} color='green' size='medium'/> */}
                </Card>
                : 
                <Card color='grey' style={normalStyle}>
                    <Card.Content>
                    <Card.Header>{this.renderStepAction(action)}</Card.Header>
                    <Card.Description>
                        <Icon name="clock outline"/>{duration}s <br/>
                        <Icon name='tint'/>{amount}ml
                    </Card.Description>
                    </Card.Content>
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
    backgroundColor: 'Orange',
    color: 'Black'
}

const normalStyle = {
    backgroundColor: 'Grey',
    color: 'Black'
}

export default connect(mapState)(ShowStepCard);
