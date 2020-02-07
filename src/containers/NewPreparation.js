import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import PrepForm from '../components/PrepForm';
import StepForm from '../components/StepForm';
import NewStepCard from '../components/NewStepCard';
import StepViewer from './StepViewer';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import {Container, Segment} from 'semantic-ui-react'

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
        console.log('clicking create new guide, this is total time...', totalTime)
        Adapter.editPreparation(totalTime, id, jwt)
        .then(data => this.props.updateCurrentPrep(data))
        .then(() => {this.props.history.push(`/preparations/${id}`)}
        )
    }

    render() {
        return (
            <Container>
                <PrepForm />
                <Segment.Group>
                <StepViewer />

                {this.props.showSteps 
                ? this.props.addNewStep || this.props.editingPrep.steps.length < 1
                ? <StepForm />
                : null            
                : null }
                </Segment.Group>
                <br />
                <br />
                <button className='ui button huge' onClick={this.handleNewGuideClick}>Create New Coffee Guide</button>
            </Container>
        );
    }
}

const mapState = state => {
    return {
        addNewStep: state.addNewStep,
        showSteps: state.showSteps,
        editingPrep: state.editingPrep,
        jwt: state.jwt
    }
}

const mapDispatch = dispatch => {
    return {
        updateCurrentPrep: (prep) => dispatch(CoffeeAction.updateCurrentPrep(prep))
    }
}

export default withRouter(connect(mapState, mapDispatch)(NewPreparation));
