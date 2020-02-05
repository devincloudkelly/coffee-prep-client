import React, { Component } from 'react';

export class StepCard extends Component {
    render() {
        const { id, action, duration, amount, order, directions } = this.props.step
        return (
            <div className='ui raised card'>
                <h4>{action}</h4>
                <p>{directions}</p>
                <h5>Duration: {duration}</h5>
                <h5>Water: {amount}ml</h5>
            </div>
        );
    }
}

export default StepCard;
