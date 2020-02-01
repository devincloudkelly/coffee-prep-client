import React, { Component } from 'react';
import PrepViewer from './PrepViewer';

export class MainContainer extends Component {
    render() {
        return (
            <div>
                Main Container. This is just a container
                <PrepViewer />
            </div>
        );
    }
}

export default MainContainer;
