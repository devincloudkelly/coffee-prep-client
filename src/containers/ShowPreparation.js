import React, { Component } from 'react';
import { PrepSpecs } from './PrepSpecs';
import { connect } from 'react-redux';

export class ShowPreparation extends Component {
    render() {
        console.log('props in ShowPrep container...', this.props)
        return (
            <div>
                This is the Show Preparation card
                <PrepSpecs prep={this.props.currentPrep}/>
            </div>
        );
    }
}

const mapState = state => {
    return {
        currentPrep: state.currentPrep
    }
}


export default connect(mapState)(ShowPreparation);
