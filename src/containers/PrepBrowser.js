import React, { Component } from 'react';
import { Container, Divider, Icon } from 'semantic-ui-react'
import BrowseCard from '../components/BrowseCard';

export class PrepBrowser extends Component {


    renderPreps = () => {
        return this.props.preps.map( prep => {
            return <BrowseCard key={Math.random()} prep={prep} />
        })
    }
    render() {
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

export default PrepBrowser;
