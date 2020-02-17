import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepCard from '../components/StepCard';
import { Segment } from 'semantic-ui-react'
import NewStepCard from '../components/NewStepCard';

export class StepViewer extends Component {

    renderSteps = () => {
        if (this.props.steps && this.props.steps.length > 0){
            return this.props.steps.map((step, index) => {
                return <StepCard key={Math.random()} step={step} index={index} />
            })
        }
        return <p>No steps yet. Add your first step below.</p>
    }

    render() {
        return (<Segment>
                <h3>Steps: </h3>
            <div className='ui four stackable cards'>
                {this.renderSteps()}
                {this.props.steps.length < 1
                ? null
            : <NewStepCard/>}
            </div>
        </Segment>
        );
    }
}

const mapState = state => {
    return {
        steps: state.editingPrep.steps,
        stepLength: state.editingPrep.steps.length
    }
}

export default connect(mapState)(StepViewer);
