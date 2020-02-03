import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export class PrepCard extends Component {

    handleClick = (id) => {
        console.log('handling click on prep card. Id being passed through...', id)
        const prepUrl = `/preparation/${id}`
        return <Redirect to={prepUrl} />
    }

    render() {
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

export default PrepCard;
