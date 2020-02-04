import React, { Component } from 'react';
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'



class NewStepCard extends Component {

    handleNewStepClick = () => {
        console.log('toggling add new step')
        this.props.toggleStepToPrep()
    }

    render() {
        return (
            <div onClick={this.handleNewStepClick}>
                {/* <Icon name='plus' size='huge'/>  */}
                <button className='ui button large'>Add NewStep</button>
                {/* Add new step. Need to write action so when this is clicked, it triggers an action to toggle an 'adding new step' key in the store. This toggle will hid this component and bring up the form. */}
            </div>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        toggleStepToPrep: () => dispatch(CoffeeAction.toggleStepToPrep())
    }
}

export default connect(null, mapDispatch)(NewStepCard);
