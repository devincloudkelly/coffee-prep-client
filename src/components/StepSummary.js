import React, { Component } from 'react';
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

export default StepSummary;
