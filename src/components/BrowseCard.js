import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

export class BrowseCard extends Component {

    handleClick(id) {
        const prepUrl = `/preparations/${id}`
        this.props.history.push(prepUrl)
    }

    renderDevice = (device) => {
        switch (device) {
            case 'aeropress':
                return 'Aeropress'
            case 'chemex':
                return 'Chemex'
            case 'pourover':
                return 'Pour over'
            default:
                break;
        }
    }
    
    render() {
        const { id, device, coffee_brand, coffee_name, notes, coffee_amount, coffee_grind } = this.props.prep
        const prep = this.props.prep
        const user = this.props.prep.user.name
        return (
            <Card raised  onClick>
                <Card.Content onClick={() => this.handleClick(id)} attached>
                    <Card.Header>{coffee_brand} - {coffee_name}</Card.Header>
                    <Card.Meta>Created by: {user}</Card.Meta>
                    <Card.Meta>{coffee_amount}g, {coffee_grind} ground</Card.Meta>
                </Card.Content>
                <Card.Content  onClick={() => this.handleClick(id)}>
                    <Card.Description>
                <h4>{this.renderDevice(device)}</h4>

                    </Card.Description>
                <Card.Description>{notes}</Card.Description>               
                </Card.Content>
                <Button.Group size='tiny'  attached-bottom >
                    <Button className='ui button' inverted style={{backgroundColor: '#364652'}} onClick={() => this.handleClick(id)}>View</Button>
                </Button.Group >
            </Card>
        );
    }
}

export default withRouter(BrowseCard);
