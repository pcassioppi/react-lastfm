import React, { Component } from "react";
// import UserService from "../services/Service";
// import { Link } from "react-router-dom";

import axios from 'axios'
import {Card, Table} from 'react-bootstrap';

const API_URL = 'http://localhost:8082/api/';

export default class ArtistPage extends Component{   
    constructor(props){
        super(props);
        this.state ={
            //the 'id' here is from the url API_URL+'artists/${id}'
            id: '',
            name:'',
            plays:'',
            lfm_link:''
        };
    }

    componentDidMount(){
         //var art_id = this.state.id;
        //const artist_id = this.props.match.params.id;
        const artistId = +this.props.match.params.id;
        if(artistId>=0){
            this.byId(artistId);
        }
    }

    byId(artistId){
        axios.get(API_URL+'artists/'+artistId).then(response=>{
            if(response.data!=null){
                this.setState({
                    id: response.data.artist_id,
                    name: response.data.name,
                    plays: response.data.plays,
                    lfm_link: response.data.lfm_link
                });
            }
            }).catch((error)=>{
                console.error("Error: "+error);
            });
        }
    

  


    render(){
        const {id, name, plays, lfm_link } = this.state;

        return(           
            <Card border="danger" className ={"border border-dark bg-dark text-white"}>
                <Card.Header className="text-center">Your Total Info for {name}</Card.Header>
                <Card.Body>
                    <Table striped  bordered hover variant="secondary">
                        <thead>
                        <tr>
                            <td>Artist Id</td>
                            <td>Artist Name</td>
                            <td>Artist Plays</td>
                            <td>Last Fm</td>                           
                        </tr>
                        </thead>
                        <tbody>                      
                            <tr>                               
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{plays}</td>
                                <td> 
                                    <a href={"https://www.last.fm"+lfm_link}>link</a>                                                                         
                                </td>
                            </tr>                      
                        </tbody>
                     </Table> 
                </Card.Body>
            </Card>        
        );
    };

}