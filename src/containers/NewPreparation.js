import React, { Component } from 'react';

export class NewPreparation extends Component {
    state = {
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
                I am the new preparation screen
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
                        <option type='text' value=''>Choose grind</option>
                        <option type='text' value='extra coarse'>Extra Coarse</option>
                        <option type='text' value='coarse'>Coarse</option>
                        <option type='text' value='medium-coarse'>Medium-Coarse</option>
                        <option type='text' value='medium'>Medium</option>
                        <option type='text' value='medium-fine'>Medium-Fine</option>
                        <option type='text' value='fine'>Fine</option>
                        <option type='text' value='extra-fine'>Extra Fine</option>
                    </select>
                    <h3>Prep Specs: </h3>
                    <label> 
                        <input type='text' name='total_time' value={this.state.total_time} onChange={e => this.handleInput(e)} placeholder='total brew time'/>
                    </label>
                    <label> 
                        <input type='text' name='total_water' value={this.state.total_water} onChange={e => this.handleInput(e)} placeholder='total water'/>
                    </label>
                    <label> 
                        <input type='text' name='water_temp' value={this.state.water_temp} onChange={e => this.handleInput(e)} placeholder='water temp'/>
                    </label> <br/>
                    <label> 
                        <textarea type='textarea' name='notes' value={this.state.notes} onChange={e => this.handleInput(e)} placeholder='notes'/>
                    </label>
                </form>
            </div>
        );
    }
}

export default NewPreparation;
