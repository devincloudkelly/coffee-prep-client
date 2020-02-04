import React, { Component } from 'react';
import { PrepSpecs } from './PrepSpecs';
import { connect } from 'react-redux';
import {BrewTimer} from '../components/BrewTimer';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import ShowStepCard from '../components/ShowStepCard';

export class ShowPreparation extends Component {

    componentDidMount() {
        console.log('props in prep show page', this.props)
        const id = this.props.match.params.id
        const jwt = this.props.jwt
        Adapter.fetchPreparation(id, jwt)
        .then(data => {
            this.props.updateCurrentPrep(data)
        })
    }
    
    renderSteps = () => {
        console.log('rendering steps in prepshow...')
        return this.props.currentPrep.steps.map(step => {
            return <ShowStepCard key={Math.random()} step={step}/>
        })
    }

    handleBeginBrew = () => {
        console.log('starting brew...')
    }

    createCheckpoints = (steps) => {
        console.log('creating checkpoints...')
        let counter = 0
        const checkpoints = []
        steps.map(step => {
            counter += step.duration
            checkpoints.push({time: (counter * 1000), callback: ()=>console.log('function for this step', step)})
        })
        return checkpoints
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
                <BrewTimer checkpoints={this.createCheckpoints(steps)}/>
                <br/>
                {this.renderSteps()}
            </div>
        );
    }
}

const mapState = state => {
    return {
        currentPrep: state.currentPrep,
        jwt: state.jwt
    }
}

const mapDispatch = dispatch => {
    return {
        updateCurrentPrep: (prep) => dispatch(CoffeeAction.updateCurrentPrep(prep))
    }
}

export default connect(mapState, mapDispatch)(ShowPreparation);
