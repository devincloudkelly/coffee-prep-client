import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import PrepForm from '../components/PrepForm';
import StepForm from '../components/StepForm';
import StepViewer from './StepViewer';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import {Container, Segment} from 'semantic-ui-react'
import EditStepForm from '../components/EditStepForm';

export class NewPreparation extends Component {

    computeTotalTime = () => {
        let totalTime = 0
        this.props.editingPrep.steps.map(step => {
             totalTime += step.duration
        })
        return totalTime
    }

    handleNewGuideClick = () => {
        const totalTime = {
            total_time: this.computeTotalTime()
        }
        const id = this.props.editingPrep.id
        const jwt = this.props.jwt
        Adapter.editPreparation(totalTime, id, jwt)
        .then(data => this.props.updateCurrentPrep(data))
        .then(() => {this.props.history.push(`/preparations/${id}`)}
        )
    }

    render() {
        if (this.props.editingStepId){
            return (
                <Container>
                <PrepForm />
                <Segment.Group>
                <StepViewer />
                <EditStepForm />
                </Segment.Group>
                <br />
                <br />
                {this.props.editingPrep.steps < 1
                ? null
                : <button className='ui button huge' onClick={this.handleNewGuideClick}>Save This Preparation</button> }
                
            </Container>
            )
        }
        return (
            <Container>
                <PrepForm />
                <Segment.Group>
                <StepViewer />
                {this.props.editingStepId !== null
                ? <EditStepForm />
                : this.props.showSteps 
                ? this.props.addNewStep || this.props.editingPrep.steps.length < 1
                ? <StepForm />
                : null            
                : null }
                </Segment.Group>
                <br />
                <br />
                {this.props.editingPrep.steps < 1
                ? null
                : <button className='ui button huge' onClick={this.handleNewGuideClick}>Save This Preparation</button> }
            </Container>
        );
    }
}

const mapState = state => {
    return {
        addNewStep: state.addNewStep,
        showSteps: state.showSteps,
        editingPrep: state.editingPrep,
        jwt: state.jwt,
        editingStepId: state.editingStepId
    }
}

const mapDispatch = dispatch => {
    return {
        updateCurrentPrep: (prep) => dispatch(CoffeeAction.updateCurrentPrep(prep))
    }
}

export default withRouter(connect(mapState, mapDispatch)(NewPreparation));
