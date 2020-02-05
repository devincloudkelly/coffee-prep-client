import React, { Component } from 'react';
import {connect} from 'react-redux'
import Adapter from '../services/Adapter'
import CoffeeAction from '../action/coffeeAction';
import { Form } from 'semantic-ui-react'

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
        water_temp: 0,
        notes: ''
    }
    
    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        }, ()=>console.log(this.state))
    }
    
    createPreparation = (e) => {
        e.preventDefault()
        const prep = this.state
        console.log(prep, this.props.id)
        const jwt = this.props.jwt
        if (!this.state.id){
            console.log('this is the prep being sent to create...', prep)
            Adapter.addPreparation(prep, jwt)
            .then(data => {
                this.props.addPrepToStore(data)
                this.setState({
                    id: data.id
                })
            })
            
        } else {
            console.log('this is the prep being sent to edit...', prep)
            Adapter.editPreparation(prep, prep.id, jwt)
            .then(console.log)
        }
    }
    
    
    render() {
        const showSteps = this.props.showSteps
        return (

                <form onSubmit={this.createPreparation}>
                    <h3>Method:</h3>
                    <label>
                        <input type='radio' name='device' value='aeropress' onChange={e => this.handleInput(e)}/>
                        Aeropress
                    </label>
                    <label>
                        <input type='radio' name='device' value='chemex' onChange={e => this.handleInput(e)}/>
                        Chemex
                    </label>
                    <label>
                        <input type='radio' name='device' value='pourover' onChange={e => this.handleInput(e)}/>
                        Pour Over
                    </label>
                    
                    {/* <Form.group widths='equal'> */}
                        <h3>Coffee:</h3>
                        <div className='field'>
                        <label> 
                            <input type='text' name='coffee_brand' value={this.state.coffee_brand} onChange={e => this.handleInput(e)} placeholder='coffee brand'/>
                        </label>

                        </div>
                        <div className='field'>
                        <label>
                            <input type='text' name='coffee_name' value={this.state.coffee_name} onChange={e => this.handleInput(e)} placeholder='coffee name'/>
                        </label>

                        </div>
                        <div className='field'>
                        <label>
                            <input type='number' name='coffee_amount' value={this.state.coffee_amount} onChange={e => this.handleInput(e)} placeholder='grams of coffee'/>
                        </label>

                        </div>
                        <div className='field'>
                            {/* <div className='ui selection dropdown'> */}

                            <select name='coffee_grind' value={this.state.value} onChange={e => this.handleInput(e)}>
                                <option value=''>Choose grind</option>
                                <option value='extra coarse'>Extra Coarse</option>
                                <option value='coarse'>Coarse</option>
                                <option value='medium-coarse'>Medium-Coarse</option>
                                <option value='medium'>Medium</option>
                                <option value='medium-fine'>Medium-Fine</option>
                                <option value='fine'>Fine</option>
                                <option value='extra-fine'>Extra Fine</option>
                            </select>
                            {/* </div> */}

                        </div>
                    {/* </Form.group> */}
                    <h3>Water: </h3>
                    <label> 
                        <input type='number' name='total_water' value={this.state.total_water} onChange={e => this.handleInput(e)} placeholder='total water'/>
                    </label>
                    <label> 
                        <input type='number' name='water_temp' value={this.state.water_temp} onChange={e => this.handleInput(e)} placeholder='water temp'/>
                    </label>
                    <h3>Notes: </h3>
                    <label> 
                        <textarea type='textarea' name='notes' value={this.state.notes} onChange={e => this.handleInput(e)} placeholder='notes'/>
                    </label><br/>
                    {this.state.id
                    ? <input type='submit' value='Update Preparation'/>
                    : <input type='submit' value='Add Steps'/>
                    }
                  
                </form>
        );
    }
}

const mapState = state => {
    return {
        user_id: state.user.id,
        jwt: state.jwt,
        showSteps: state.showSteps,
        id: state.editingPrep.id
    }
}

const mapDispatch = dispatch => {
    return {
        addPrepToStore: prep => dispatch(CoffeeAction.addPrepToStore(prep))
    }
}


export default connect(mapState, mapDispatch)(PrepForm);