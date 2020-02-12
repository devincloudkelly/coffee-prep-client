import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrepCard from '../components/PrepCard'
import { Container, Divider, Icon } from 'semantic-ui-react'
import BrowseCard from '../components/BrowseCard';

export class PrepBrowser extends Component {


    renderPreps = () => {
        console.log('preps to render...', this.props.preps)
        return this.props.preps.map( prep => {
            return <BrowseCard key={Math.random()} prep={prep} />
        })
    }
    render() {
        // if (this.props.browser.length < 1){
        //     console.log(this.props)
        //     return <div>loading...</div>
        // }
            return (
                <div>
                <Container >
                    <br/>
                    <Divider horizontal>
                    Browse All Coffee Preparations
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

// const mapState = state => {
//     console.log('state in prepbrowser...', state)
//     return {
//         browser: state.browser
//     }
// }

export default PrepBrowser;
