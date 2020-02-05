import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepCard from '../components/StepCard';

export class StepViewer extends Component {

    renderSteps = () => {
        if (this.props.steps && this.props.steps.length > 0){
            return this.props.steps.map(step => {
                return <StepCard key={Math.random()} step={step} />
            })
        }
    }

    render() {
        console.log(this.props.steps)
        return (
            <div className='ui four stackable cards'>
                {this.renderSteps()}
            </div>
        );
    }
}

const mapState = state => {
    return {
        steps: state.editingPrep.steps
    }
}

export default connect(mapState)(StepViewer);
