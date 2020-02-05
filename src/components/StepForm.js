import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from '../services/Adapter'
import CoffeeAction from '../action/coffeeAction';
import {Segment} from 'semantic-ui-react'

export class StepForm extends Component {
    state = {
        action: '',
        duration: null,
        amount: null,
        order: null,
        directions: ''
    }

    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        }, ()=>console.log(this.state))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const step = this.state
        step.preparation_id = this.props.preparation_id
        const jwt = this.props.jwt
        console.log('submitting step, this is step...', step)
        Adapter.addStep(step, jwt)
        .then(data => this.props.addStepToStore(data))
        .then(this.props.resetAddNewStep())
    }

    render() {
        return (
            <Segment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3>Prep Action: </h3>
                        <select name='action' value={this.state.action} onChange={e => this.handleInput(e)}>
                            <option value=''>Choose Action</option>
                            <option value='bloom'>Bloom</option>
                            <option value='pour'>Pour</option>
                            <option value='stir'>Stir</option>
                            <option value='wait'>Wait</option>
                            <option value='press'>Press</option>
                        </select>
                    </label>
                        <h3>Step Specs: </h3>
                    <label>
                        <input type='number' name='duration' value={this.state.duration} onChange={e => this.handleInput(e)} placeholder='Duration in seconds'/>
                    </label>
                    <label>
                        <input type='number' name='amount' value={this.state.amount} onChange={e => this.handleInput(e)} placeholder='Amount in ml'/>
                    </label>
                    {/* <label>
                        <input type='number' name='order' value={this.state.order} onChange={e => this.handleInput(e)} placeholder='Order'/>
                    </label> */}
                    <h3>Step notes:</h3>
                    <label>
                    <textarea type='text' name='directions' value={this.state.directions} onChange={e => this.handleInput(e)} placeholder='Add directions for this step ex. Pour coffee over grounds and stir.'/>
                    </label>
                    <input type='submit' value='Add Step' />
                </form>
            </Segment>
        );
    }
}

const mapState = state => {
    return {
        jwt: state.jwt,
        preparation_id: state.editingPrep.id
    }
}

const mapDispatch = dispatch => {
    return {
        addStepToStore: (step) => dispatch(CoffeeAction.addStepToStore(step)),
        resetAddNewStep: () => dispatch(CoffeeAction.resetAddNewStep())
    }
}

export default connect(mapState, mapDispatch)(StepForm);
