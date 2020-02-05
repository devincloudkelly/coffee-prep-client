import React, { Component } from 'react';
import { connect } from 'react-redux';

export class StepSummary extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.currentStep.directions}</h3>
            </div>
        );
    }
}

// const mapState = state => {
//     return {
//         currentStep: state.currentStep
//     }
// }

export default StepSummary;
