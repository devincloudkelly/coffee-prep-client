import React, { Component } from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom'
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';
import Adapter from '../services/Adapter';


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
    
    render() {
        console.log('prep in prep card', this.props.prep)
        const { id, device, coffee_brand, coffee_name, notes } = this.props.prep
        const prep = this.props.prep
        // if (this.state.isEditing === true ){
        //     return <Redirect to='/preparations/new'/>
        // }
        return (
            <div className='ui raised card attached segment'>
                <div onClick={() => this.handleClick(id)} className='ui attached segment'>
                <h3>Place {device} Device icon here</h3>
                <h5>{coffee_brand} - {coffee_name}</h5>
                <p>{notes}</p>
                </div>
                <div className='ui two bottom attached buttons'>
                    <button className='ui button' onClick={() => this.handleEdit(prep)}>Edit</button>
                    <button className='ui button' onClick={() => this.handleDelete(id)}>Delete</button>
                </div>
            </div>
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
