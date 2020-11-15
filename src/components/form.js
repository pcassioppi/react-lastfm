import React, {Component} from 'react';
import axios from 'axios'
import {Card,Form, Button, Container} from 'react-bootstrap';

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
        //alert('success');
        e.target.reset();
        // use this to send the user to the page where their info is
        window.location = "/artists";
        ;
    }


    render(){
    return (
        <Card border="danger" className ={"border border-dark bg-secondary text-white"}>
            <Card.Header className="text-center">Last.fm Username Input</Card.Header>
                <Card.Body>
            <Form className="form-horizontal" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="col-sm-10">
                    <label className="col-sm-2" htmlFor="username">Enter last.fm username</label>
                    
                        <input id="username" name="username" type="text" onChange={this.onChange}/>
                    </div>
                </div>
                
                
                <Button variant="primary" type="submit">Enter</Button>
                
            </Form>
        </Card.Body>
        </Card>
    );
    
}
}
