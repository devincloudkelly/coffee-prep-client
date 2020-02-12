import React, { Component } from 'react';
import { Menu, Segment, Button, Grid } from 'semantic-ui-react';

export class Footer extends Component {
    render() {
        return (
            // <Menu className='ui bottom fixed menu' inverted textAlign='center' widths={3} style={{backgroundColor: '#364652'}}>
            // <Grid textAlign='center' padded>
            //     <Grid.Row>
            //     <p style={{color: 'White'}}>Created by Devin Cloud Kelly</p>
            //     </Grid.Row>
            //     <Grid.Row>
            //     <br/> 
            //     <a href='https://github.com/devincloudkelly' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>Github</Button></a>
            //     <a href='https://medium.com/@devin.cloud.kelly' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>Blog</Button></a>
            //     <a href='https://www.linkedin.com/in/devin-cloud-kelly/' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>LinkedIn</Button></a>
            //     </Grid.Row>
            //     </Grid>
            // </Menu>
            <Segment basic textAlign='center' padded style={{marginTop: '80px'}}>
            <Menu className='ui bottom fixed menu' inverted textAlign='center' widths={3} style={{backgroundColor: '#364652'}}>
                {/* <Grid.Row> */}
                <Segment.Group>

                <Segment basic>
                <p style={{color: 'White'}}>Created by Devin Cloud Kelly</p>
                {/* </Segment> */}
                {/* </Grid.Row> */}
                {/* <Grid.Row> */}
                {/* <Segment basic> */}

                <a href='https://github.com/devincloudkelly' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>Github</Button></a>
                <a href='https://medium.com/@devin.cloud.kelly' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>Blog</Button></a>
                <a href='https://www.linkedin.com/in/devin-cloud-kelly/' target='_blank'><Button circular style={{backgroundColor: '#FABC3C'}}>LinkedIn</Button></a>
                </Segment>
                </Segment.Group>
                {/* </Grid.Row> */}
            </Menu>
                </Segment>
        );
    }
}

export default Footer;
