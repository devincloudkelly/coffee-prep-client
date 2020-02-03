import React, { Component } from 'react';
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';



class NewStepCard extends Component {

    handleNewStepClick = () => {
        console.log('adding new step')
        this.props.addStepToPrep()
    }

    render() {
        return (
            <div onClick={this.handleNewStepClick}>
                Add new step. Need to write action so when this is clicked, it triggers an action to toggle an 'adding new step' key in the store. This toggle will hid this component and bring up the form.
            </div>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        addStepToPrep: () => dispatch(CoffeeAction.addStepToPrep())
    }
}

export default connect(null, mapDispatch)(NewStepCard);
