import React, { Component } from 'react';

export class NewPreparation extends Component {
    state = {
        method: null,
        coffee_brand: '',
        coffee_name: '',
        coffee_amount: null,
        coffee_grind: ''
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
                    <select name='coffee_grind' onChange={e => this.handleInput(e)}>
                        <option type='text' value=''>Choose grind</option>
                        <option type='text' value='extra coarse'>Extra Coarse</option>
                        <option type='text' value='coarse'>Coarse</option>
                        <option type='text' value='medium-coarse'>Medium-Coarse</option>
                        <option type='text' value='medium'>Medium</option>
                        <option type='text' value='medium-fine'>Medium-Fine</option>
                        <option type='text' value='fine'>Fine</option>
                        <option type='text' value='extra-fine'>Extra Fine</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default NewPreparation;
