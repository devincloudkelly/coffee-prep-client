import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

export class ShowStepCard extends Component {
    render() {
        const { action, duration, amount, order, directions } = this.props.step
        return (
            <div>
                <h1>{action}</h1>
                <h3><i class="clock outline icon"></i>{duration}s</h3>
                <br/>
            </div>
        );
    }
}

export default ShowStepCard;
