import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Segment, Divider} from 'semantic-ui-react'

export class StepSummary extends Component {
    render() {
        return (
            <Segment inverted>
                <Divider horizontal inverted color='grey'>Directions</Divider>
                <h3>{this.props.currentStep.directions}</h3>
            </Segment>
        );
    }
}

// const mapState = state => {
//     return {
//         currentStep: state.currentStep
//     }
// }

export default StepSummary;
