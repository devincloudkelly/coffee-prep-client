import React, { Component } from 'react';
import {connect} from 'react-redux'


export class PrepForm extends Component {
    state = {
        user_id: this.props.user_id,
        method: null,
        coffee_brand: '',
        coffee_name: '',
        coffee_amount: null,
        coffee_grind: '',
        total_time: null,
        total_water: null,
        water_temp: null,
        notes: ''
    }
    
    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        }, ()=>console.log(this.state))
    }
    
    
    
    render() {
        return (
            <div>
                <form>
                    <h3>Method:</h3>
                    <label>
                        <input type='radio' name='method' value='aeropress' onChange={e => this.handleInput(e)}/>
                        Aeropress
                    </label>
                    <label>
                        <input type='radio' name='method' value='chemex' onChange={e => this.handleInput(e)}/>
                        Chemex
                    </label>
                    <label>
                        <input type='radio' name='method' value='pourover' onChange={e => this.handleInput(e)}/>
                        Pour Over
                    </label>
                    <h3>Coffee:</h3>
                    <label> 
                        <input type='text' name='coffee_brand' value={this.state.coffee_brand} onChange={e => this.handleInput(e)} placeholder='coffee brand'/>
                    </label>
                    <label>
                        <input type='text' name='coffee_name' value={this.state.coffee_name} onChange={e => this.handleInput(e)} placeholder='coffee name'/>
                    </label>
                    <label>
                        <input type='number' name='coffee_amount' value={this.state.coffee_amount} onChange={e => this.handleInput(e)} placeholder='grams of coffee'/>
                    </label>
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
                    <h3>Water: </h3>
                    {/* <label> 
                        <input type='number' name='total_time' value={this.state.total_time} onChange={e => this.handleInput(e)} placeholder='total brew time'/>
                    </label> */}
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
                    <input type='submit' value='Add Steps'/>
                </form>
                
            </div>
        );
    }
}

const mapState = state => {
    return {
        user_id: state.user.id
    }
}

export default connect(mapState)(PrepForm);