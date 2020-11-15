import React, { Component } from "react";
import UserService from "../services/Service";
import { Link } from "react-router-dom";

import axios from 'axios'
import {Card, Table, Button, ButtonGroup} from 'react-bootstrap';

const API_URL = 'http://localhost:8082/api/';

export default class TrackTable extends Component{   
    constructor(props){
        super(props);
        this.state ={
            tracks:[]
        };
    }

    componentDidMount(){
        UserService.getTracks().then((response)=>{
            this.setState({
                tracks:response.data
            });
        });
    }
       


    render(){
        const {tracks, song_id, name, plays, lfm_link, artist, artist_id } = this.state;

        return(
            
            
            <Card border="danger" className ={"border border-dark bg-dark text-white"}>
                <Card.Header className="text-center">Track List</Card.Header>
                <Card.Body>
                    <Table striped  bordered hover variant="secondary">
                        <thead>
                        <tr>
                            <td></td>
                            <td>Track Name</td>
                            <td>Track Plays</td>
                            <td>Artist</td>
                            <td>Last Fm</td>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tracks.length === 0 ?
                            <tr align="center">
                                <td colSpan="7">No Albums Available.</td>
                            </tr> :
                            tracks.map((track) => (
                            <tr key={track.song_id}>
                                
                                <td>{track.song_id+1}</td>
                                <td>{track.name}</td>
                                <td>{track.plays}</td>
                                <td><a href={'artist/'+ track.artist_id}>{track.artist}</a></td>
                                <td><a href={"https://www.last.fm"+track.lfm_link}>link</a></td>
                                
                                
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