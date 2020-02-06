import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Icon, Card, Button} from 'semantic-ui-react'

export class NewPrepCard extends Component {
    render() {
        return (
            <>
            <Card attached>
                <Card.Content>

                <Card.Header textAlign='center'>New Coffee Prep</Card.Header>
                <Card.Description textAlign='center'>
                <Link to='/preparations/new'><Icon name='plus circle' size='massive' color='teal'/></Link>
                </Card.Description>
                </Card.Content>
            <Button attached='bottom'>Create</Button>
            </Card >
            </>
        );
    }
}

export default NewPrepCard;
