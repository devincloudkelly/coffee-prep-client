import React, { Component } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';

export class Footer extends Component {
    render() {
        return (
            <Segment basic textAlign='center' padded >
            <Menu inverted textAlign='center' widths={3} style={{backgroundColor: '#364652'}}>
                <Segment.Group>
                <Segment basic>
                <p style={{color: 'White'}}>Created by Devin Cloud Kelly</p>
                <a href='https://github.com/devincloudkelly' target='_blank' rel="noopener noreferrer"><Button circular style={{backgroundColor: '#FABC3C'}}>Github</Button></a>
                <a href='https://medium.com/@devin.cloud.kelly' target='_blank' rel="noopener noreferrer"><Button circular style={{backgroundColor: '#FABC3C'}}>Blog</Button></a>
                <a href='https://www.linkedin.com/in/devin-cloud-kelly/' target='_blank' rel="noopener noreferrer"><Button circular style={{backgroundColor: '#FABC3C'}}>LinkedIn</Button></a>
                </Segment>
                </Segment.Group>
            </Menu>
                </Segment>
        );
    }
}

export default Footer;
