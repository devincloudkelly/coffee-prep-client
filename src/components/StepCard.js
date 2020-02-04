import React, { Component } from 'react';

export class StepCard extends Component {
    render() {
        const { id, action, duration, amount, order, directions } = this.props.step
        return (
            <div>
    <p>{directions}</p>
    <h5>Duration: {duration}</h5>
    <h5>Water: {amount}ml</h5>
    <h4>{order}. {action}</h4>


            </div>
        );
    }
}

export default StepCard;
