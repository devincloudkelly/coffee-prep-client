import React, { Component } from 'react';
import { PrepSpecs } from './PrepSpecs';
import { connect } from 'react-redux';
import {BrewTimer} from '../components/BrewTimer';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import ShowStepCard from '../components/ShowStepCard';
import { StepSummary } from '../components/StepSummary';
import { Container, Message, Dimmer, Loader, Segment, Divider, Button, Grid, Transition} from 'semantic-ui-react'


export class ShowPreparation extends Component {
    state = {
        isStarted: false
    }

    // once component mounts, fetch this prep and nested steps and update currentPrep in store
    componentDidMount() {
        const id = this.props.match.params.id
        const jwt = this.props.jwt
        let newPrep;
        Adapter.fetchPreparation(id, jwt)
        .then(data => {
            this.props.updateCurrentPrep(data)
            this.props.updateCurrentStep(data.steps[0])
            newPrep = data
        })
        .then(()=> {
            this.setState({
                ...newPrep
            })
        })
    }
    
    // render steps to the screen based on the currentPrep in store.
    renderSteps = () => {
        return this.props.currentPrep.steps.map(step => {
            return <ShowStepCard key={Math.random()} step={step}/>
        })
    }

    // create checkpoints to pass into the timer. These are used to trigger events as one step ends and another begins.
    createCheckpoints = () => {
        let counter = 0
        const checkpoints = []
        this.props.currentPrep.steps.map((step, index) => {
            counter += step.duration
            checkpoints.push({time: (counter * 1000), callback: () => this.handleStepChange(index)})
        })
        return checkpoints
    }

    // using this ensure that BrewTimer gets the correct checkpoints. Does not serve any other purpose
    checkpointLength = () => {
        return this.createCheckpoints().length
    }
    // increase the current step as each step duration expires and progresses to next step.
    handleStepChange = (index) => {
        let nextStep = index + 1
        if (nextStep < this.props.currentPrep.steps.length){
            this.props.updateCurrentStep(this.props.currentPrep.steps[nextStep])
        }
    }

    // this callback function is called when the reset button on the timer is pressed. Resets the timer, steps and step directions
    handleReset = ()=> {
        const currentPrep = this.props.currentPrep
        this.setState({
            ...this.state,
            isStarted: false
        })
        this.forceUpdate()
        // also need to reset the steps to the first step, aka currentPrep.steps[0]
        this.props.updateCurrentStep(currentPrep.steps[0])
    }

    handleAddSteps = () => {
        const prep = this.props.currentPrep
        this.props.updateEditingPrep(prep)
        this.props.addEditingId(prep.id)
        this.props.history.push('/preparations/new')
    }

    handleStartPrep = () => {
        this.setState({
            ...this.state,
            isStarted: true
        })
    }

    handlePause = ()=> {
        this.setState({
            ...this.state,
            isStarted: false
        })
    }
    // conditional rendering. Shows loading spinner if loading, shows note if there are no steps, and loads properly otherwise.
    render() {
        if (Object.keys(this.state).length === 0){
            return <Container>
            <Dimmer active inverted>
              <Loader size='huge'>Loading</Loader>
            </Dimmer>
          </Container>
        }
        if (!this.state.steps || this.state.steps.length < 1){
            return (
            <Container>
                <Segment.Group>
                    <PrepSpecs prep={this.props.currentPrep}/>
                    <BrewTimer checkpoints={this.createCheckpoints()} checkpointLength={this.checkpointLength()}/>
                    <Segment inverted>
                    <Divider horizontal inverted color='grey'>Steps</Divider>
                    <br/>
                        <Message attached inverted>
                            <Grid stackable columns={2}>
                                <Grid.Column width={12}>
                            <Message.Content >
                            <Message.Header inverted>
                                This Coffee Prep is Missing Steps
                            </Message.Header>
                                You need to add steps to this coffee prep in order to enable this brew dashboard.
                            </Message.Content>
                                </Grid.Column>
                                <Grid.Column textAlign='center' width={4}>
                            <Message.Content>
                            <Button onClick={this.handleAddSteps}>Add Steps</Button>
                            </Message.Content>
                                </Grid.Column>
                            </Grid>
                        </Message>
                    <br/>
                        </Segment>
                </Segment.Group>
        </Container>)
        }
        const { steps } = this.props.currentPrep
        return (
            <Container>
                <Segment.Group>
                <Transition visible={!this.state.isStarted} animation='scale' duration={200}>
                    <Segment inverted>
                    <PrepSpecs prep={this.props.currentPrep}/>
                    </Segment>
                </Transition>
                <BrewTimer checkpoints={this.createCheckpoints()} checkpointLength={this.checkpointLength()} reset={this.handleReset} start={this.handleStartPrep} pause={this.handlePause}/>
                <StepSummary currentStep={this.props.currentStep}/>
                <Segment inverted>
                    <Divider horizontal inverted>Steps</Divider>
                    <div className='ui four stackable cards'>
                {this.renderSteps()}
                </div>
                <br/>
                    </Segment>
                </Segment.Group>
            </Container>
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
        updateCurrentStep: step => dispatch(CoffeeAction.updateCurrentStep(step)),
        updateEditingPrep: prep => dispatch(CoffeeAction.updateEditingPrep(prep)),
        addEditingId: id => dispatch(CoffeeAction.addEditingId(id))
    }
}

export default connect(mapState, mapDispatch)(ShowPreparation);
