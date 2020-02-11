import React, { Component } from 'react';
import { PrepSpecs } from './PrepSpecs';
import { connect } from 'react-redux';
import {BrewTimer} from '../components/BrewTimer';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import ShowStepCard from '../components/ShowStepCard';
import { StepSummary } from '../components/StepSummary';
import { Container, Message, Dimmer, Loader, Segment, Divider, Button, Grid} from 'semantic-ui-react'


export class ShowPreparation extends Component {
    state = {
        isStarted: false
    }

    // once component mounts, fetch this prep and nested steps and update currentPrep in store
    componentDidMount() {
        console.log('props in prep show page, component did mount', this.props)
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
        console.log('rendering steps in prepshow...')
        return this.props.currentPrep.steps.map(step => {
            console.log(step)
            return <ShowStepCard key={Math.random()} step={step}/>
        })
    }

    // create checkpoints to pass into the timer. These are used to trigger events as one step ends and another begins.
    createCheckpoints = () => {
        console.log('creating checkpoints...these are props', this.props)
        let counter = 0
        const checkpoints = []
        this.props.currentPrep.steps.map((step, index) => {
            counter += step.duration
            checkpoints.push({time: (counter * 1000), callback: () => this.handleStepChange(index)})
        })
        console.log(checkpoints)
        return checkpoints
    }

    // using this ensure that BrewTimer gets the correct checkpoints. Does not serve any other purpose
    checkpointLength = () => {
        return this.createCheckpoints().length
    }
    // increase the current step as each step duration expires and progresses to next step.
    handleStepChange = (index) => {
        console.log('handling step change, here is the step that was passed up...', index)
        let nextStep = index + 1
        if (nextStep < this.props.currentPrep.steps.length){
            this.props.updateCurrentStep(this.props.currentPrep.steps[nextStep])
        }
    }

    // this callback function is called when the reset button on the timer is pressed. Resets the timer, steps and step directions
    handleReset = ()=> {
        console.log('forcing update from show prep page...')
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
        console.log('editing prep from showpage...', prep)
        // this.props.updateEditingPrep(prep)
        this.props.updateEditingPrep(prep)
        this.props.addEditingId(prep.id)
        this.props.history.push('/preparations/new')
    }

    handleStartPrep = () => {
        console.log('starting brew...')
        this.setState({
            ...this.state,
            isStarted: true
        })
    }

    handlePause = ()=> {
        console.log('pausing brew...')
        this.setState({
            ...this.state,
            isStarted: false
        })
    }
    // conditional rendering. Shows loading spinner if loading, shows note if there are no steps, and loads properly otherwise.
    render() {
        console.log('props in ShowPrep container...', this.props)
        if (Object.keys(this.state).length === 0){
            return <Container>
            <Dimmer active inverted>
              <Loader size='huge'>Loading</Loader>
            </Dimmer>
          </Container>
        }
        if (!this.state.steps || this.state.steps.length < 1){
            console.log('prep is in show state, but steps length is less than one...')
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

            {console.log('these are the steps and state in the final if statement..', steps, this.state.steps)}
            {console.log('prep is in show state and steps length is greater than 1')}
                {this.state.isStarted
                ? <Segment inverted>
                    <Divider horizontal inverted>Specs hidden during brew. Press Pause to View.</Divider>
                </Segment>
                : <PrepSpecs prep={this.props.currentPrep}/>
                }
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
