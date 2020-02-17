import React, { Component } from 'react';
import {connect} from 'react-redux'
import Adapter from '../services/Adapter'
import CoffeeAction from '../action/coffeeAction';
import { Form, Segment, Button} from 'semantic-ui-react'
import { withRouter} from 'react-router-dom'



export class PrepForm extends Component {
    state = {
        id: null,
        user_id: this.props.user_id,
        device: null,
        coffee_brand: '',
        coffee_name: '',
        coffee_amount: 0,
        coffee_grind: '',
        total_time: 0,
        total_water: 0,
        water_temp: 200,
        notes: ''
    }
    grindOptions = [
        { key: 'extra coarse', text: 'Extra Coarse', value: 'extra coarse'},
        { key: 'coarse', text: 'Coarse', value: 'coarse'},
        { key: 'medium coarse', text: 'Medium Coarse', value: 'medium coarse'},
        { key: 'medium', text: 'Medium', value: 'medium'},
        { key: 'medium fine', text: 'Medium Fine', value: 'medium fine'},
        { key: 'fine', text: 'Fine', value: 'fine'},
        { key: 'extra fine', text: 'Extra Fine', value: 'extra fine'},
    ]
    
    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectInput = (e, { value }) => {
        return this.setState({
            coffee_grind: value
        })
    }
    
    submitPrepForm = (e) => {
        e.preventDefault()
        const prep = this.state
        const jwt = this.props.jwt
        if (!this.state.id){
            Adapter.addPreparation(prep, jwt)
            .then(data => {
                this.props.updateEditingPrep(data)
                this.props.pushPrepToStore(data)
                this.setState({
                    id: data.id
                })
            })
            
        } else {
            Adapter.editPreparation(prep, prep.id, jwt)
            .then(() => {
                this.props.editPrepInStore(prep)
                this.props.removeEditingId()
            })
            this.props.history.push('/profile')
        }
    }
    
    componentDidMount() {
        if (this.props.editingId) {
            this.setState({
                ...this.props.editingPrep
            })
        }
    }
    
    
    render() {
        return (
            <Segment>
                <Form onSubmit={this.submitPrepForm} >
                    <h3>Method:</h3>
                    <Form.Group inline>
                        <Form.Field>
                            <input type='radio' name='device' value='aeropress' onChange={e => this.handleInput(e)}/>
                        <label>
                            Aeropress
                        </label>
                        </Form.Field>
                        <Form.Field>
                            <input type='radio' name='device' value='chemex' onChange={e => this.handleInput(e)}/>
                        <label>
                            Chemex
                        </label>
                        </Form.Field>
                        <Form.Field>
                            <input type='radio' name='device' value='pourover' onChange={e => this.handleInput(e)}/>
                        <label>
                            Pour Over
                        </label>
                        </Form.Field>
                    </Form.Group>
                        <h3>Coffee:</h3>
                    <Form.Field>
                        <label>Brand</label>
                            <input type='text' name='coffee_brand' value={this.state.coffee_brand} onChange={e => this.handleInput(e)} placeholder='coffee brand'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                            <input type='text' name='coffee_name' value={this.state.coffee_name} onChange={e => this.handleInput(e)} placeholder='coffee name'/>
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Coffee Amount (g)</label>
                                <input type='number' name='coffee_amount' value={this.state.coffee_amount} onChange={e => this.handleInput(e)} placeholder='grams of coffee'/>
                        </Form.Field>
                        <Form.Select 
                            label='Grind'
                            options={this.grindOptions}
                            placeholder='Grind'
                            value={this.state.coffee_grind}
                            onChange={this.handleSelectInput}
                            />
                    <Form.Field>
                        <label>Water Temp (F)</label>
                        <input type='number' name='water_temp' value={this.state.water_temp} onChange={e => this.handleInput(e)} placeholder='water temp'/>
                    </Form.Field>
                    </Form.Group>
                    <h3>Notes: </h3>
                    <Form.Field>
                        <label></label>
                        <textarea type='textarea' name='notes' value={this.state.notes} onChange={e => this.handleInput(e)} placeholder='notes'/>
                    </Form.Field>
   
                    <Form.Field control={Button}>
                        {this.state.id ? 'Update Preparation' : 'Add Steps'}
                    </Form.Field>
                  
                </Form>
            </Segment>
        );
    }
}

const mapState = state => {
    return {
        user_id: state.user.id,
        jwt: state.jwt,
        showSteps: state.showSteps,
        id: state.editingPrep.id,
        editingPrep: state.editingPrep,
        editingId: state.editingId
    }
}

const mapDispatch = dispatch => {
    return {
        updateEditingPrep: prep => dispatch(CoffeeAction.updateEditingPrep(prep)),
        removeEditingId: () => dispatch(CoffeeAction.removeEditingId()),
        editPrepInStore: prep => dispatch(CoffeeAction.editPrepInStore(prep)),
        pushPrepToStore: prep => dispatch(CoffeeAction.pushPrepToStore(prep))
    }
}

export default withRouter(connect(mapState, mapDispatch)(PrepForm));