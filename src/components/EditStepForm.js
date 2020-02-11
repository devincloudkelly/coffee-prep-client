import React, { Component } from 'react';
import { Segment, Form, Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import Adapter from '../services/Adapter'
import CoffeeAction from '../action/coffeeAction';

export class EditStepForm extends Component {
    state = {
        editingStepId: this.props.editingStepId,
        id: null,
        action: '',
        duration: null,
        amount: null,
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
        }, ()=> console.log(this.state))
    }

    handleSelectInput = (e, { value }) => {
        console.log(e.target.name, e.target.value, value)
        return this.setState({
            action: value
        }, ()=>console.log(this.state))
    }

    handleSubmit = e => {
        e.preventDefault()
        const step = this.state
        console.log('submitting edited step...', step)
        step.preparation_id = this.props.preparation_id
        const jwt = this.props.jwt
        console.log('submitting step, this is step...', step)
        Adapter.updateStep(step, jwt)
        .then(data => {
            this.props.updateStepInEditingPrep(data)
            this.props.removeEditingStepId()
        })
    }

    componentDidMount() {
        this.setState({
            editingStepId: this.props.editingStepId,
            ...this.props.editingStep
        })
    }
    
    render() {
        console.log('state of editstep form on render...', this.state)
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
                    <Form.Field control={Button}>Edit Step</Form.Field>                    
                </Form>
            </Segment>
        );
    }
}

const mapState = state => {
    return {
        editingStep: state.editingStep,
        jwt: state.jwt,
        editingStepId: state.editingStepId
    }
}

const mapDispatch = dispatch => {
    return {
        updateStepInEditingPrep: step => dispatch(CoffeeAction.updateStepInEditingPrep(step)),
        removeEditingStepId: () => dispatch(CoffeeAction.removeEditingStepId())
    }
}

export default connect(mapState, mapDispatch)(EditStepForm);
