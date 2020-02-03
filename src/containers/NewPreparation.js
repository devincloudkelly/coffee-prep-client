import React, { Component } from 'react';
import PrepForm from '../components/PrepForm';
import StepForm from '../components/StepForm';
import NewStepCard from '../components/NewStepCard';
import {connect} from 'react-redux'
import StepViewer from './StepViewer';

export class NewPreparation extends Component {
    
    toggleStepsForm = () => {
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
                <StepViewer />
                {this.toggleStepsForm()}
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
