import React, { Component } from "react";
import UserService from "../services/Service";
import { Link } from "react-router-dom";

import axios from 'axios'
import {Card, Table, Button, ButtonGroup} from 'react-bootstrap';

const API_URL = 'http://localhost:8082/api/';

export default class AlbumTable extends Component{   
    constructor(props){
        super(props);
        this.state ={
            albums:[]
        };
    }

    componentDidMount(){
        UserService.getAlbums().then((response)=>{
            this.setState({
                albums:response.data
            });
        });
    }
    
    // async componentDidMount(){
    //     const fresponse = UserService.getAlbums()
    //     const dresponse = await UserService.getArtistById(fresponse.data.artist_id)
    //     // UserService.getAlbums().then((response)=>{
    //     //     this.setState({
    //     //         albums:response.data
    //     //     });
    //     //     return UserService.getArtistById(albums['id']).then((response) =>{
                
    //     //     })
    //     // });
    // }
    


    render(){
        const {albums, album_id, name, plays, lfm_link, artist, artist_id } = this.state;

        return(
            
            
            <Card border="danger" className ={"border border-dark bg-dark text-white"}>
                <Card.Header className="text-center">Album List</Card.Header>
                <Card.Body>
                    <Table striped  bordered hover variant="secondary">
                        <thead>
                        <tr>
                            <td>Album Id</td>
                            <td>Album Name</td>
                            <td>Album Plays</td>
                            <td>Last Fm</td>
                            <td>Artist</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            albums.length === 0 ?
                            <tr align="center">
                                <td colSpan="7">No Albums Available.</td>
                            </tr> :
                            albums.map((album) => (
                            <tr key={album.album_id}>
                                
                                <td>{album.album_id+1}</td>
                                <td>{album.name}</td>
                                <td>{album.plays}</td>
                                <td><a href={"https://www.last.fm"+album.lfm_link}>link</a></td>
                                <td><a href={'artist/'+ album.artist_id}>{album.artist}</a></td>
                                
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