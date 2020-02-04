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
