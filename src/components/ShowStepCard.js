import React, { Component } from 'react';

export class ShowStepCard extends Component {
    render() {
        const { action, duration, amount, order, directions } = this.props.step
        return (
            <div>
                <h1>{action}</h1>
                <br/>
            </div>
        );
    }
}

export default ShowStepCard;
