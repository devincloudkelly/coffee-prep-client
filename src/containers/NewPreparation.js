import React, { Component } from 'react';
import PrepForm from '../components/PrepForm';
import StepForm from '../components/StepForm';
import NewStepCard from '../components/NewStepCard';
import {connect} from 'react-redux'
import StepViewer from './StepViewer';

export class NewPreparation extends Component {
    
    toggleStepsForm = () => {
        console.log('toggling steps view', this.props)
        if (!this.props.showSteps){
            return <NewStepCard />
        } else {
            if (!this.props.editingPrep || this.props.editingPrep.steps.length < 1){
                return <StepForm />
            } else {
                return <NewStepCard />
            }
        }
    }

    showStepsSection = () => {
        if (this.props.showSteps === true) this.toggleStepsForm()
        return null
    }

    render() {
        return (
            <div>
                I am the new preparation screen
                <PrepForm />
                <StepViewer />
                {this.props.showSteps 
                ? this.toggleStepsForm()
                : null }
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
