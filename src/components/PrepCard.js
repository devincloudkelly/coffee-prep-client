import React, { Component } from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom'
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';
import Adapter from '../services/Adapter';
import {Button, Card} from 'semantic-ui-react'


export class PrepCard extends Component {

    state={
        isEditing: false
    }
    
    handleClick = (id) => {
        console.log('handling click on prep card. Id being passed through...', id)
        const prepUrl = `/preparations/${id}`
        // this.props.updateCurrentPrep(this.props.prep)
        this.props.history.push(prepUrl)
    }

    handleDelete = (id) => {
        const newPreps = this.props.preps.filter(prep => {
            return prep.id !== id
        })
        console.log('deleting prep from prepcard...', id, this.props.jwt)
        Adapter.deletePreparation(id, this.props.jwt)
        // .then(console.log(this.props.preps, newPreps))
        this.props.updatePreps(newPreps)
    }

    handleEdit = (prep) => {
        console.log('editing prep from prepcard...', prep)
        // this.props.updateEditingPrep(prep)
        this.props.updateEditingPrep(prep)
        this.props.addEditingId(prep.id)
        this.setState({
            isEditing: true
        })
        this.props.history.push('/preparations/new')

    }

    renderDevice = (device) => {
        switch (device) {
            case 'aeropress':
                return 'Aeropress'
                break;
            case 'chemex':
                return 'Chemex'
                break;
            case 'pourover':
                return 'Pour over'
                break;
            default:
                break;
        }
    }
    
    render() {
        // console.log('prep in prep card', this.props.prep)
        const { id, device, coffee_brand, coffee_name, notes, coffee_amount, coffee_grind } = this.props.prep
        const prep = this.props.prep
        // if (this.state.isEditing === true ){
        //     return <Redirect to='/preparations/new'/>
        // }
        return (
            <Card raised attached onClick>
                <Card.Content onClick={() => this.handleClick(id)}>
                    <Card.Header>{coffee_brand} - {coffee_name}</Card.Header>
                    <Card.Meta>{coffee_amount}g, {coffee_grind} ground</Card.Meta>
                </Card.Content>
                <Card.Content attached onClick={() => this.handleClick(id)}>
                    <Card.Description>
                <h4>{this.renderDevice(device)}</h4>

                    </Card.Description>
                <Card.Description>{notes}</Card.Description>               
                </Card.Content>
                <Button.Group size='tiny' attached-bottom>
                    <Button className='ui button' onClick={() => this.handleEdit(prep)}>Edit</Button>
                    <Button className='ui button' onClick={() => this.handleDelete(id)}>Delete</Button>
                </Button.Group >
            </Card>
        );
    }
}

const mapState  = state => {
    return {
        jwt: state.jwt,
        preps: state.user.preps,
        editingId: state.editingId
    }
}


const mapDispatch = dispatch => {
    return {
        updateCurrentPrep: prep => dispatch(CoffeeAction.updateCurrentPrep(prep)),
        updatePreps: preps => dispatch(CoffeeAction.updatePreps(preps)),
        updateEditingPrep: prep => dispatch(CoffeeAction.updateEditingPrep(prep)),
        addEditingId: id => dispatch(CoffeeAction.addEditingId(id))
    }
}

export default withRouter(connect(mapState, mapDispatch)(PrepCard));
