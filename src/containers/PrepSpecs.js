import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export class PrepSpecs extends Component {
    render() {
        console.log('current Prep in prepSpecs...', this.props)
        const { device, coffee_brand, coffee_name, coffee_amount, coffee_grind, total_water, total_time, water_temp, notes} = this.props.prep
        return (
            <div>
                These are the prep specs
                <h3>Brew Specs: </h3>
                <div className='prep-specs'>
                    Method: {device} <br/>
                    Coffee: {coffee_amount}g of {coffee_brand} {coffee_name} <br/>
                </div>
            </div>
        );
    }
}



export default withRouter(PrepSpecs);
