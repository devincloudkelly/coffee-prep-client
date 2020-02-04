import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import CoffeeAction from '../action/coffeeAction';
import { connect } from 'react-redux';


export class PrepCard extends Component {
    
    handleClick = (id) => {
        console.log('handling click on prep card. Id being passed through...', id)
        const prepUrl = `/preparations/${id}`
        // this.props.updateCurrentPrep(this.props.prep)
        this.props.history.push(prepUrl)
    }
    
    render() {
        const { id, device, coffee_brand, coffee_name, notes } = this.props.prep
        return (
            <div onClick={() => this.handleClick(id)}>
                <h3>Place {device} Device icon here</h3>
                <h5>{coffee_brand} - {coffee_name}</h5>
                <p>{notes}</p>
            </div>
        );
    }
}


const mapDispatch = dispatch => {
    return {
        updateCurrentPrep: prep => dispatch(CoffeeAction.updateCurrentPrep(prep))
    }
}

export default withRouter(connect(null, mapDispatch)(PrepCard));
