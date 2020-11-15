import React, { Component } from "react";
import UserService from "../services/Service";
import { Link } from "react-router-dom";

import axios from 'axios'
import {Card, Table, Button, ButtonGroup} from 'react-bootstrap';

const API_URL = 'http://localhost:8082/api/';

export default class ArtistTable extends Component{   
    constructor(props){
        super(props);
        this.state ={
            artists:[]
        };
    }

    componentDidMount(){
        UserService.getArtists().then((response)=>{
            this.setState({
                artists:response.data
            });
        });
    }

  


    render(){
        const {artists, artist_id, name, plays, lfm_link } = this.state;

        return(
            
            
            <Card border="danger" className ={"border border-dark bg-dark text-white"}>
                <Card.Header className="text-center">Artist List</Card.Header>
                <Card.Body>
                    <Table striped  bordered hover variant="secondary">
                        <thead>
                        <tr>
                            <td>Artist Id</td>
                            <td>Artist Name</td>
                            <td>Artist Plays</td>
                            <td> Last Fm Link</td>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {
                            artists.length === 0 ?
                            <tr align="center">
                                <td colSpan="7">No Artists Available.</td>
                            </tr> :
                            artists.map((artist) => (
                            <tr key={artist.artist_id}>
                                
                                <td>{artist.artist_id+1}</td>
                                <td>{artist.name} <a href={'artist/'+ artist.artist_id}>Your Stats</a></td>
                                <td>{artist.plays}</td>
                                <td><a href={"https://www.last.fm"+artist.lfm_link}>link</a></td>
                                
                                
                            </tr>
                            ))
                        }                                
                        
                        </tbody>
                     </Table> 
                </Card.Body>
            </Card>        
        );
    };

}