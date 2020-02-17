import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from '../services/Adapter';
import CoffeeAction from '../action/coffeeAction';
import { PrepBrowser } from './PrepBrowser';
import { Container, Dimmer, Loader } from 'semantic-ui-react'

export class Browse extends Component {
    state = {}

    componentDidMount() {
        const jwt = this.props.jwt
        Adapter.fetchAllPreps(jwt)
        .then(preps => {
            this.props.addPrepsToBrowser(preps)
        }, ()=> {
            this.setState({
                mounted: true,
                preps: this.props.browser
            })
        })
    }
    
    render() {
        if (!this.props.browser ||  this.props.browser.length < 1){
            return (
                <Container>
                    <Dimmer active inverted>
                      <Loader size='huge'>Loading</Loader>
                    </Dimmer>
                </Container>
            )
        }
        return (
            <div>
                <PrepBrowser preps={this.props.browser}/>
            </div>
        );
    }
}

const mapState = state => {
    return {
        jwt: state.jwt,
        browser: state.browser
    }
}

const mapDispatch = dispatch => {
    return {
        addPrepsToBrowser: preps => dispatch(CoffeeAction.addPrepsToBrowser(preps))
    }
}
export default connect(mapState, mapDispatch)(Browse);
