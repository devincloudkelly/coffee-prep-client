import React, { Component } from 'react';

export class ShowStepCard extends Component {
    render() {
        const { action, duration, amount, order, directions } = this.props.step
        return (
            <div>
                Here's a step
            </div>
        );
    }
}

export default ShowStepCard;
