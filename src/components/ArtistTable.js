import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, Table, Button, Container, Jumbotron} from 'react-bootstrap';

import UserService from "../services/Service";

const user = localStorage.getItem('username')

export default class ArtistTable extends Component{   
    constructor(props){
        super(props);
        this.state ={
            artists:[]
        };
    }

    componentDidMount(){
        UserService.getArtists(user).then((response)=>{
            this.setState({
                artists:response.data
            });
        });
    }

  


    render(){
        const {artists} = this.state;

        return(
            <Container>
            
            <Jumbotron className="text-center">
                <h1>Last.FM artist stats for {user}</h1>
                <br></br>
                <div> To see your album or track stats, click on the links at the top of the page.</div>
                <br></br>
                <div> To return to the home page and find the info of another user, click the button below.</div>
                <br></br>
                <p>
                    <Link to={""}>
                        <Button variant='primary'>Home</Button>
                    </Link>
                </p>
                
            </Jumbotron>

            <Card border="danger" className ={"border border-dark bg-secondary text-white"}>
                {/* <Card.Header className="text-center">Artist List {user}</Card.Header> */}
                <Card.Body>
                    <Table striped  bordered hover variant="secondary" borderless='True'>
                        <thead>
                        <tr>
                            <td></td>
                            <th>Rank</th>
                            <th>Artist Name</th>
                            <th>Artist Plays</th>
                            <th>Last Fm Link</th>
                            
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
                                <td><img src={"https://lastfm.freetls.fastly.net/i/u/avat"+artist.image} alt='track img' width="100" height="100"/></td>
                                <td className="align-middle">{parseInt(artist.artist_id.split(':')[1])+1}</td>
                                {/* <td>{artist.name} <a href={'artist/'+ artist.artist_id}>Your Stats</a></td> */}
                                <td className="align-middle">{artist.name}</td>
                                <td className="align-middle">{artist.plays}</td>
                                <td className="align-middle"><a href={"https://www.last.fm"+artist.lfm_link}>Link</a></td>
                                
                                
                            </tr>
                            ))
                        }                                
                        
                        </tbody>
                     </Table> 
                </Card.Body>
            </Card>        
            </Container>
        );
    };

}