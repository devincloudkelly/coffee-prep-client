import React, { Component } from 'react';
import {Card, Icon, Label} from 'semantic-ui-react'

export class StepCard extends Component {
    render() {
        const { action, duration, amount, directions } = this.props.step
        return (
            <Card raised >
                    <Card.Content >
                <Card.Header>
                    <h2>{action}</h2>
                    </Card.Header>
                    <Card.Meta>
                        <Icon name='clock'/> {duration} seconds 
                        <Icon name='tint'/> {amount}ml
                    </Card.Meta>
                    </Card.Content>
                    <Label attached='bottom right' color='red'>{this.props.index + 1}</Label>
                    <Card.Content>
                        <p>{directions}</p>
                    </Card.Content>
            </Card>
        );
    }
}

export default StepCard;
