import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

export class Footer extends Component {
    render() {
        return (
            <Segment padded inverted textAlign='center' style={{backgroundColor: '#364652'}}>
                Created by Devin Cloud Kelly
                <br/> <br/>
                {/* <Button.Group> */}
                <a href='https://github.com/devincloudkelly' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>Github</Button></a>
                <a href='https://medium.com/@devin.cloud.kelly' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>Blog</Button></a>
                <a href='https://www.linkedin.com/in/devin-cloud-kelly/' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>LinkedIn</Button></a>
                {/* </Button.Group> */}
            </Segment>
        );
    }
}

export default Footer;
