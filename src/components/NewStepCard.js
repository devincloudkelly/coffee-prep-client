import React, { Component } from 'react';
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';
import { Icon, Card, Button} from 'semantic-ui-react'



class NewStepCard extends Component {

    handleNewStepClick = () => {
        console.log('toggling add new step')
        this.props.toggleStepToPrep()
    }

    render() {
        return (

            <Card attached raised onClick={this.handleNewStepClick}>
            <Card.Content >
                <Card.Header textAlign='center'>
                    <h2>Add New Step</h2>
                </Card.Header>
                <Card.Description textAlign='center'>
                    <Icon  name='plus circle' size='massive' color='teal'/>
                </Card.Description>
            </Card.Content>
                <Button attached='bottom'>Create</Button>
        </Card>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        toggleStepToPrep: () => dispatch(CoffeeAction.toggleStepToPrep())
    }
}

export default connect(null, mapDispatch)(NewStepCard);
