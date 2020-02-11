import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrepCard from '../components/PrepCard'
import { Container, Divider, Icon } from 'semantic-ui-react'

export class PrepBrowser extends Component {

    renderPreps = () => {
        console.log('preps to render...', this.props.browser)
        return this.props.browser.map( prep => {
            return <PrepCard key={Math.random()} prep={prep} />
        })
    }
    render() {
        if (this.props.browser.length < 1){
            console.log(this.props)
            return <div>loading...</div>
        }
        if (this.props.browser.length > 1) {
            return (
                <div>
                This is the browser
                <Container >
                    <Divider horizontal>
                    <Icon className="coffee icon"/> Browse All Coffee Preparations
                    </Divider>
                    <br/>
                    <div className='ui four stackable cards'>
                    {this.renderPreps()}
                    </div>
                    <br/>
                </Container>
            </div>
        );
    }
    }
}

const mapState = state => {
    return {
        browser: state.browser
    }
}

export default connect(mapState)(PrepBrowser);
