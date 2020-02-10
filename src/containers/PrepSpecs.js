import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Statistic, Segment } from 'semantic-ui-react'

export class PrepSpecs extends Component {
    render() {
        console.log('current Prep in prepSpecs...', this.props)
        const { device, coffee_brand, coffee_name, coffee_amount, coffee_grind, total_water, total_time, water_temp, notes} = this.props.prep
        return (
            <Segment.Group>
            <Segment inverted >
                <p>Prepare your coffee and brew station according to the specs below. Once ready, press the start button below the timer</p>
                <Statistic.Group inverted color='grey' widths='three' size='tiny'>
                    <Statistic>
                        <Statistic.Value>{device}</Statistic.Value>
                        <Statistic.Label>method</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{coffee_amount}g</Statistic.Value>
                        <Statistic.Label>{coffee_brand} {coffee_name}</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{coffee_grind}</Statistic.Value>
                        <Statistic.Label>grind</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{water_temp}°</Statistic.Value>
                        <Statistic.Label>Water Temp(F)</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{total_water}ml</Statistic.Value>
                        <Statistic.Label>Total Water</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{total_time}s</Statistic.Value>
                        <Statistic.Label>Total Time</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Segment>
            <Segment inverted >
                <h3>{notes}</h3>
            </Segment>
                </Segment.Group>
        );
    }
}



export default withRouter(PrepSpecs);
