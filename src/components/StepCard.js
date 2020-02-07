import React, { Component } from 'react';
import {Card, Icon, Label, Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';

export class StepCard extends Component {

    handleDelete = (step) => {
        const jwt = this.props.jwt
        console.log('deleting step...', step)
        Adapter.deleteStep(step.id, jwt)
        .then(data => {
            this.props.removeStepFromStore(data)
            this.props.removeStepFromEditingPrep(data)
            //need to update steps in new prep form
            console.log('just deleted step...', data)
        })
    }

    render() {
        const { action, duration, amount, directions } = this.props.step
        const {step} = this.props
        return (
            <Card raised >
                    <Card.Content >
                <Card.Header>
                    <h2>{action}</h2>
                    </Card.Header>
                    <Card.Meta>
                        <Icon name='clock'/> {duration} seconds 
                        <Icon name='tint'/> {amount}ml
                    </Card.Meta>
                    </Card.Content>
                    <Label attached='top right' color='blue'>{this.props.index + 1}</Label>
                    <Card.Content>
                        <p>{directions}</p>
                    </Card.Content>
                    <Button.Group>
                        <Button>Edit</Button>
                        <Button onClick={() => this.handleDelete(step)}>Delete</Button>
                    </Button.Group>
            </Card>
        );
    }
}

const mapState = state => {
    return {
        jwt: state.jwt,
        editingPrep: state.editingPrep
    }
}

const mapDispatch = dispatch => {
    return {
        removeStepFromStore: step => dispatch(CoffeeAction.removeStepFromStore(step)),
        updateEditingPrep: prep => dispatch(CoffeeAction.updateEditingPrep(prep)),
        removeStepFromEditingPrep: step => dispatch(CoffeeAction.removeStepFromEditingPrep(step))
    }
}

export default connect(mapState, mapDispatch)(StepCard);
