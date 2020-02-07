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
        if (this.props.addNewStep === true) {
            return (
                <Card attached raised onClick={this.handleNewStepClick}>
                <Card.Content >
                    <Card.Header textAlign='center'>
                        <h2>Cancel New Step</h2>
                    </Card.Header>
                    <Card.Description textAlign='center'>
                        <Icon  name='cancel' size='massive' color='yellow'/>
                    </Card.Description>
                </Card.Content>
                <Button attached='bottom'>Cancel</Button>
            </Card>
            )
        }
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

const mapState = state => {
    return {
        addNewStep: state.addNewStep
    }
}

const mapDispatch = dispatch => {
    return {
        toggleStepToPrep: () => dispatch(CoffeeAction.toggleStepToPrep())
    }
}

export default connect(mapState, mapDispatch)(NewStepCard);
