import React, { Component } from 'react';
import PrepForm from '../components/PrepForm';
import StepViewer from './StepViewer';

export class NewPreparation extends Component {
    

    render() {
        return (
            <div>
                I am the new preparation screen
                <PrepForm />
                <StepViewer />
            </div>
        );
    }
}



export default NewPreparation;
