import React, { Component } from 'react';
import { PrepSpecs } from './PrepSpecs';
import { connect } from 'react-redux';
import {BrewTimer} from '../components/BrewTimer';

export class ShowPreparation extends Component {

    handleBeginBrew = () => {
        console.log('starting brew...')
    }

    render() {
        console.log('props in ShowPrep container...', this.props)
        return (
            <div>
                This is the Show Preparation card
                <PrepSpecs prep={this.props.currentPrep}/>
                <br/>
                <button onClick={this.handleBeginBrew}>Begin Brew</button>
                <br/>
                <BrewTimer />
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
