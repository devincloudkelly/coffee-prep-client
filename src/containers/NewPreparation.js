import React, { Component } from 'react';
import PrepForm from '../components/PrepForm';
import StepForm from '../components/StepForm';
import NewStepCard from '../components/NewStepCard';
import {connect} from 'react-redux'
import StepViewer from './StepViewer';

export class NewPreparation extends Component {

    render() {
        return (
            <div>
                I am the new preparation screen
                <PrepForm />
                <StepViewer />
                {this.props.showSteps 
                ? this.props.addNewStep
                    ? <StepForm />
                    : <NewStepCard />            
                : null }
                <button>Create New Coffee Guide</button>
            </div>
        );
    }
}

const mapState = state => {
    return {
        addNewStep: state.addNewStep,
        showSteps: state.showSteps,
        editingPrep: state.editingPrep
    }
}

export default connect(mapState)(NewPreparation);
