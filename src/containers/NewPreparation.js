import React, { Component } from 'react';
import PrepForm from '../components/PrepForm';
import StepForm from '../components/StepForm';
import NewStepCard from '../components/NewStepCard';
import {connect} from 'react-redux'

export class NewPreparation extends Component {
    
    toggleStepsView = () => {
        console.log('toggling steps view')
        if (this.props.addNewStep === true){
            return <StepForm />
        } else {
            return <NewStepCard />
        }
    }

    render() {
        return (
            <div>
                I am the new preparation screen
                <PrepForm />
                {this.toggleStepsView()}
            </div>
        );
    }
}

const mapState = state => {
    return {
        addNewStep: state.addNewStep
    }
}

export default connect(mapState)(NewPreparation);
