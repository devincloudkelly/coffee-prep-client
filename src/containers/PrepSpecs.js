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
                <p>Prepare your coffee and brew station according to the specs below.</p>
                <Statistic.Group inverted color='grey' widths='four' size='small'>
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
                <Statistic inverted horizontal >
                    <Statistic.Label>Notes: </Statistic.Label> 
                    <Statistic.Value text size='small'> {notes}</Statistic.Value>
                </Statistic>

            </Segment>
            
                <Segment inverted >
        <p>Once your water is up to temp, grind your coffee and add it to your {device}. Once ready, press the start button below to begin brewing.</p>
                </Segment>
                </Segment.Group>
        );
    }
}



export default withRouter(PrepSpecs);
