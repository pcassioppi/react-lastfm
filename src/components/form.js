import React, {Component} from 'react';
import axios from 'axios'
import {Card,Form, Button, Container, Jumbotron, Col} from 'react-bootstrap';

const API_URL = 'http://localhost:8082/api'


export default class UserForm extends Component{

    
      
    constructor() {
		super();
        this.state = {
            username:'',
        };
    }   


    onChange = (e) => {
        this.setState({ username : e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { username } = this.state;

        axios.post(API_URL+'/users', { username })
        .then((result) => {console.log(result);
        console.log(result.data)}, (error) => {
            console.log(error);
          })
        localStorage.setItem('username',username)
        //alert('success');
        e.target.reset();
        // use this to send the user to the page where their info is
        window.location = "/artists";
        ;
    }


    render(){
    return (
        <Container>
        <Jumbotron className="text-center">
                <h1>Welcome to my Spotify/Last.FM Website!</h1>
                <br></br>
                <td> On this web app, you can enter your last.fm username, and you can see your top 50 artists, albums and tracks, as well as the spotify audio data for your tracks!</td>
                <br></br>
                
                <td> To see your information, simply enter your last.fm username into the form below, and click enter to see your data.</td>
                <br></br>
                
                
        </Jumbotron>
        <Card border="danger" className ={"border border-dark bg-secondary text-white"}>
            <Card.Header className="text-center">Home Page</Card.Header>
                <Card.Body >
                    <Form className="form-horizontal" onSubmit={this.onSubmit}>
                        <Form.Label className="text-center" column='lg'>Last.FM Username</Form.Label>
                        <Form.Row className="justify-content-md-center">
                            <Col xs='auto'>
                                
                                
                                <Form.Control size='lg' type="text" id='username' onChange={this.onChange} placeholder="Enter username here" />
                            </Col>
                            <Col xs='auto'>
                                <Button size='lg' variant="primary" type="submit" className='mb-4'>Enter</Button>

                            </Col>
                        </Form.Row>
            
                {/* <div className="form-group">
                    <div className="col-sm-10">
                    <label className="col-sm-3" htmlFor="username">Enter last.fm username</label>
                    
                        <input id="username" name="username" type="text" onChange={this.onChange}/>
                       
                        
                    </div>
                    
                </div> */}
                
                
                
                
            </Form>
        </Card.Body>
        </Card>
        </Container>
    );
    
}
}
