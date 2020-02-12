import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

export class Footer extends Component {
    render() {
        return (
            <Segment padded textAlign='center'>
                Created by Devin Cloud Kelly
                <br/> <br/>
                {/* <Button.Group> */}
                <a href='https://github.com/devincloudkelly' target='_blank'><Button circular>Github</Button></a>
                <a href='https://medium.com/@devin.cloud.kelly' target='_blank'><Button circular>Blog</Button></a>
                <a href='https://www.linkedin.com/in/devin-cloud-kelly/' target='_blank'><Button circular>LinkedIn</Button></a>
                {/* </Button.Group> */}
            </Segment>
        );
    }
}

export default Footer;
