import React, { Component } from 'react';
import {Redirect, withRouter} from 'react-router-dom'


export class PrepCard extends Component {
    
    handleClick = (id) => {
        console.log('handling click on prep card. Id being passed through...', id)
        const prepUrl = `/preparation/${id}`
        this.props.history.push(prepUrl)
    }
    
    render() {
        console.log('this is props in prep card', this.props)
        console.log(this.props.prep)
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

export default withRouter(PrepCard);
