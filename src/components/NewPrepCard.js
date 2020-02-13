import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {Icon, Card, Button} from 'semantic-ui-react'
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';

export class NewPrepCard extends Component {

    handleClick = () => {
        this.props.removeEditingPrep()
        this.props.history.push('/preparations/new')
    }

    render() {
        return (
            <>
            <Card raised attached onClick={this.handleClick}>
                <Card.Content>

                <Card.Header textAlign='center'>New Coffee Prep</Card.Header>
                <Card.Description textAlign='center'>
                <Icon name='plus circle' size='massive' color='teal'/>
                </Card.Description>
                </Card.Content>
            <Button size='tiny' attached='bottom'>Create</Button>
            </Card >
            </>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        removeEditingPrep: () => dispatch(CoffeeAction.removeEditingPrep())
    }
}

export default withRouter(connect(null, mapDispatch)(NewPrepCard));
