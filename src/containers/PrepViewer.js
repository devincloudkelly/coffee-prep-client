import React, { Component } from 'react';
import PrepCard from '../components/PrepCard';
import {connect} from 'react-redux'
import NewPrepCard from '../components/NewPrepCard';
import {Container, Message, Divider, Icon} from 'semantic-ui-react'

export class PrepViewer extends Component {

    renderPreps = () => {
        return this.props.preps.map( prep => {
            return <PrepCard key={Math.random()} prep={prep} />
        })
    }

    render() {
        if (this.props.preps.length < 1){
            return <div>
                <h4 className='ui horizontal divider header'>
                <i className="coffee icon"></i>
                My Coffee Preparations
                </h4>
                <br/>
                <Container>
                    <Message>
                    <Message.Header>
                You don't have any Coffee Preparations yet.
                    </Message.Header>
                Time to get to work. Click the box below to create your first coffee prep.
                    </Message>
                <NewPrepCard />
                </Container>
                <br/>
            </div>
        }
        return (
            <Container >
                <Divider horizontal>
                <Icon className="coffee icon"/> My Coffee Preparations
                </Divider>
                <br/>
                <div className='ui four stackable cards'>
                {this.renderPreps()}
                <NewPrepCard />
                </div>
                <br/>
            </Container>
        );
    }
}

const mapState = state => {
    return {
        preps: state.user.preps,
        editingId: state.editingId,
    }
}

export default connect(mapState)(PrepViewer);
