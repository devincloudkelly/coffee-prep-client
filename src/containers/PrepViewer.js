import React, { Component } from 'react';
import PrepCard from '../components/PrepCard';
import {connect} from 'react-redux'
import NewPrepCard from '../components/NewPrepCard';

export class PrepViewer extends Component {

    renderPreps = () => {
        console.log('preps in the prep viewer...', this.props.preps)
        return this.props.preps.map( prep => {
            return <PrepCard key={Math.random()} prep={prep} />
        })
    }

    render() {
        return (
            <div>
                My Coffee Preparations <br/>
                {this.renderPreps()}
                <br/>
                <NewPrepCard />
            </div>
        );
    }
}

const mapState = state => {
    return {
        preps: state.user.preps
    }
}

export default connect(mapState)(PrepViewer);
