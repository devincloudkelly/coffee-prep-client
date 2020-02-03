import React, { Component } from 'react';

export class PrepCard extends Component {
    render() {
        console.log(this.props.prep)
        const { id, device, coffee_brand, coffee_name, notes } = this.props.prep
        return (
            <div>
                <h3>Place Brew Device icon here</h3>
                <h5>{coffee_brand} - {coffee_name}</h5>
                <p>{notes}</p>
            </div>
        );
    }
}

export default PrepCard;
