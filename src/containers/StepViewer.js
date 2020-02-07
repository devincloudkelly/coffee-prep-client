import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepCard from '../components/StepCard';
import { Segment } from 'semantic-ui-react'

export class StepViewer extends Component {

    renderSteps = () => {
        if (this.props.steps && this.props.steps.length > 0){
            return this.props.steps.map((step, index) => {
                return <StepCard key={Math.random()} step={step} index={index} />
            })
        }
    }

    render() {
        console.log(this.props.steps)
        return (<Segment>

                <h3>Current Steps: </h3>
            <div className='ui four stackable cards'>
                {this.renderSteps()}
            </div>
        </Segment>
        );
    }
}

const mapState = state => {
    return {
        steps: state.editingPrep.steps
    }
}

export default connect(mapState)(StepViewer);
