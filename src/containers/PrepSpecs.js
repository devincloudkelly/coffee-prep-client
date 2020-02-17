import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Statistic, Segment, Divider } from 'semantic-ui-react'

export class PrepSpecs extends Component {

    render() {
        const { device, coffee_brand, coffee_name, coffee_amount, coffee_grind, total_water, total_time, water_temp, notes} = this.props.prep
        return (
            <>
                <p style={{textAlign: 'center'}}>Prepare your coffee and brew station according to the specs below. Once ready, start the timer</p>
                <Divider horizontal inverted color='grey'>Brew Specs</Divider>
                <br/>
                <Statistic.Group inverted color='grey' widths={2} size='tiny'>
                    <Statistic>
                        <Statistic.Value>{device}</Statistic.Value>
                        <Statistic.Label>method</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{coffee_amount}g</Statistic.Value>
                        <Statistic.Label>{coffee_brand}</Statistic.Label>
                        <Statistic.Label>{coffee_name}</Statistic.Label>
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
                        <Statistic.Value>{total_time}𝗌</Statistic.Value>
                        <Statistic.Label>Total Time</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            <Segment inverted style={{textAlign: 'center'}}>
                <Divider horizontal inverted color='grey'>Notes</Divider>
                <h3>{notes}</h3>
                <br/>
                <Divider/>
            </Segment>
            </>
        );
    }
}



export default withRouter(PrepSpecs);
