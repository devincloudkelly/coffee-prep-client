import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import { PrepBrowser } from './PrepBrowser';

export class Browse extends Component {
    state = {
        mounted: false
    }

    componentDidMount() {
        const jwt = this.props.jwt
        Adapter.fetchAllPreps(jwt)
        .then(preps => {
            this.props.addPrepsToBrowser(preps)
        })
    }
    
    render() {
        return (
            <div>
                This is the browse screen
                <PrepBrowser />
            </div>
        );
    }
}

const mapState = state => {
    return {
        jwt: state.jwt
    }
}

const mapDispatch = dispatch => {
    return {
        addPrepsToBrowser: preps => dispatch(CoffeeAction.addPrepsToBrowser(preps))
    }
}
export default connect(mapState, mapDispatch)(Browse);
