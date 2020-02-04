import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PrepSpecs extends Component {
    render() {
        console.log('current Prep in prepSpecs...', this.props)
        const { device, coffee_brand, coffee_name, coffee_amount, coffee_grind, total_water, total_time, water_temp, notes} = this.props.currentPrep
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

const mapState = state => {
    return {
        currentPrep: state.currentPrep
    }
}

export default connect(mapState)(PrepSpecs);
