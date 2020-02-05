import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class NewPrepCard extends Component {
    render() {
        return (
            <div className='ui raised card'>
                insert plus logo here and wrap with link <br/>
                <Link to='/preparations/new'>Create a new prep</Link>
            </div>
        );
    }
}

export default NewPrepCard;
