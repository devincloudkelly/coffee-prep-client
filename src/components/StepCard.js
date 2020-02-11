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
                console.log('steps in state...', this.props.steps, this.props.editingPrep)
                // this.props.removeStepFromStore(data)
            this.props.removeStepFromEditingPrep(data)
            console.log('steps in state...', this.props.steps, this.props.editingPrep)
            //need to update steps in new prep form
            console.log('just deleted step...', data)
        }, ()=> this.props.editPrepInStore(this.props.editingPrep))

    }

    handleEdit = step => {
        const jwt = this.props.jwt
        console.log('editing step...', step)
        this.props.addEditingStepId(step.id)
        this.props.addEditingStep(step)
        // add editing step Id here...
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
                        <Button onClick={()=> this.handleEdit(step)}>Edit</Button>
                        <Button onClick={() => this.handleDelete(step)}>Delete</Button>
                    </Button.Group>
            </Card>
        );
    }
}

const mapState = state => {
    return {
        jwt: state.jwt,
        editingPrep: state.editingPrep,
        steps: state.editingPrep.steps
    }
}

const mapDispatch = dispatch => {
    return {
        removeStepFromStore: step => dispatch(CoffeeAction.removeStepFromStore(step)),
        updateEditingPrep: prep => dispatch(CoffeeAction.updateEditingPrep(prep)),
        removeStepFromEditingPrep: step => dispatch(CoffeeAction.removeStepFromEditingPrep(step)),
        addEditingStepId: id => dispatch(CoffeeAction.addEditingStepId(id)),
        editPrepInStore: prep => dispatch(CoffeeAction.editPrepInStore(prep)),
        addEditingStep: step => dispatch(CoffeeAction.addEditingStep(step))
    }
}

export default connect(mapState, mapDispatch)(StepCard);
