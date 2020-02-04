import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export class PrepSpecs extends Component {
    render() {
        console.log('current Prep in prepSpecs...', this.props)
        const { device, coffee_brand, coffee_name, coffee_amount, coffee_grind, total_water, total_time, water_temp, notes} = this.props.prep
        return (
            <div>
                <h3>Brew Specs: </h3>
                <div className='prep-specs'>
                    Method: {device} <br/>
                    Coffee: {coffee_amount}g of {coffee_brand} {coffee_name}, {coffee_grind} grind<br/>
                    Water: {water_temp}deg. F,  {total_water}ml total <br/>
                    Total Time: {total_time} seconds <br/>
                    Notes: {notes} <br/>
                </div>
                <br/>
                <div>
        <p>Once your water is up to temp, grind your coffee and add it to your {device}. Once ready, press the start button below to begin brewing.</p>
                </div>
            </div>
        );
    }
}



export default withRouter(PrepSpecs);
