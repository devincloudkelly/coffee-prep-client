import React, { Component } from 'react';
import { PrepSpecs } from './PrepSpecs';
import { connect } from 'react-redux';
import {BrewTimer} from '../components/BrewTimer';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import ShowStepCard from '../components/ShowStepCard';
import { StepSummary } from '../components/StepSummary';


export class ShowPreparation extends Component {

    // once component mounts, fetch this prep and nested steps and update currentPrep in store
    componentDidMount() {
        console.log('props in prep show page', this.props)
        const id = this.props.match.params.id
        const jwt = this.props.jwt
        Adapter.fetchPreparation(id, jwt)
        .then(data => {
            this.props.updateCurrentPrep(data)
            this.props.updateCurrentStep(data.steps[0])
        })
    }
    
    // render steps to the screen based on the currentPrep in store.
    renderSteps = () => {
        console.log('rendering steps in prepshow...')
        return this.props.currentPrep.steps.map(step => {
            return <ShowStepCard key={Math.random()} step={step}/>
        })
    }

    // this is for the button I created outside of the timer. Will likely use the buttons built into the timer
    handleBeginBrew = () => {
        console.log('starting brew...')
    }

    // create checkpoints to pass into the timer. These are used to trigger events as one step ends and another begins.
    createCheckpoints = () => {
        console.log('creating checkpoints...')
        let counter = 0
        const checkpoints = []
        this.props.currentPrep.steps.map(step => {
            counter += step.duration
            checkpoints.push({time: (counter * 1000), callback: () => this.handleStepChange(step)})
        })
        console.log(checkpoints)
        return checkpoints
    }

    // using this ensure that BrewTimer gets the correct checkpoints. Does not serve any other purpose
    checkpointLength = () => {
        return this.createCheckpoints().length
    }
    
    handleStepChange = (step) => {
        console.log('handling step change, here is the step that was passed up...', step)
        this.props.updateCurrentStep(this.props.currentPrep.steps[step.id])
    }

    render() {
        console.log('props in ShowPrep container...', this.props)
        const { steps } = this.props.currentPrep
        return (
            <div>
                <PrepSpecs prep={this.props.currentPrep}/>
                <br/>
                {/* <button onClick={this.handleBeginBrew}>Begin Brew</button> */}
                <br/>
                <BrewTimer checkpoints={this.createCheckpoints}/>
                <br/>
                {this.renderSteps()}
                <StepSummary currentStep={this.props.currentStep}/>
            </div>
        );
    }
}

const mapState = state => {
    return {
        currentPrep: state.currentPrep,
        jwt: state.jwt,
        currentStep: state.currentStep
    }
}

const mapDispatch = dispatch => {
    return {
        updateCurrentPrep: prep => dispatch(CoffeeAction.updateCurrentPrep(prep)),
        updateCurrentStep: step => dispatch(CoffeeAction.updateCurrentStep(step))
    }
}

export default connect(mapState, mapDispatch)(ShowPreparation);
