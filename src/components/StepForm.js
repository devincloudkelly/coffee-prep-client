import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from '../services/Adapter'
import CoffeeAction from '../action/coffeeAction';
import { Form, Segment, Button} from 'semantic-ui-react'

export class StepForm extends Component {
    state = {
        id: null,
        action: '',
        duration: 0,
        amount: 0,
        order: null,
        directions: ''
    }
    
    stepOptions = [
        { key: 'bloom', text: 'Bloom', value: 'bloom'},
        { key: 'pour', text: 'Pour', value: 'pour'},
        { key: 'stir', text: 'Stir', value: 'stir'},
        { key: 'wait', text: 'Wait', value: 'wait'},
        { key: 'press', text: 'Press', value: 'press'}
    ]

    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelectInput = (e, { value }) => {
        return this.setState({
            action: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const step = this.state
        step.preparation_id = this.props.preparation_id
        const jwt = this.props.jwt
        if (!this.props.addEditingStepId){
        Adapter.addStep(step, jwt)
        .then(data => {
            this.props.addStepToEditingPrep(data)
        })
        .then(()=> {
            this.props.editPrepInStore(this.props.editingPrep)
            this.props.resetAddNewStep()})
        }
    }


    render() {
        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                        <h3>Step Specs: </h3>
                    <Form.Group widths='equal'>
                    <Form.Select 
                        label='Action'
                        options={this.stepOptions}
                        placeholder='Action'
                        onChange={this.handleSelectInput}
                        />
                        <Form.Field>
                            <label>Duration (seconds)
                            </label>
                            <input type='number' name='duration' value={this.state.duration} onChange={this.handleInput} placeholder='Duration in seconds'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Amount of Water (ml)
                            </label>
                            <input type='number' name='amount' value={this.state.amount} onChange={this.handleInput} placeholder='Amount in ml'/>
                        </Form.Field>
                        </Form.Group>
                    <h3>Step notes:</h3>
                    <Form.Field>
                        <label>
                        <textarea type='text' name='directions' value={this.state.directions} onChange={this.handleInput} placeholder='Add directions for this step ex. Pour coffee over grounds and stir.'/>
                        </label>
                    </Form.Field>
                    <Form.Field control={Button}>Add Step</Form.Field>                    
                </Form>
            </Segment>
        );
    }
}

const mapState = state => {
    return {
        jwt: state.jwt,
        preparation_id: state.editingPrep.id,
        editingPrep: state.editingPrep,
        editingStepId: state.editingStepId
    }
}

const mapDispatch = dispatch => {
    return {
        addStepToEditingPrep: (step) => dispatch(CoffeeAction.addStepToEditingPrep(step)),
        resetAddNewStep: () => dispatch(CoffeeAction.resetAddNewStep()),
        addStepToPrep: step => dispatch(CoffeeAction.addStepToPrep(step)),
        editPrepInStore: prep => dispatch(CoffeeAction.editPrepInStore(prep)),
        removeEditingStepId: () => dispatch(CoffeeAction.removeEditingStepId())
    }
}

export default connect(mapState, mapDispatch)(StepForm);
