import React, { Component } from "react";
import UserService from "../services/Service";
import { Link } from "react-router-dom";

import {Card, Table, Button, Jumbotron, Container} from 'react-bootstrap';


const user = localStorage.getItem('username')

// .slice(7).replace(/\/|%/g,'')

export default class TrackTable extends Component{   
    constructor(props){
        super(props);
        this.state ={
            tracks:[]
        };
    }

    componentDidMount(){
        UserService.getTracks(user).then((response)=>{
            this.setState({
                tracks:response.data
            });
        });
    }
       


    render(){
        const {tracks } = this.state;

        return(
            <Container >
            <Jumbotron className="text-center">
                <h1>Last.FM track stats for {user}</h1>
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

            <Card className="text-center">
                <Card.Header>Click on 'Spotify Stats' to see the audio statistics for a track</Card.Header>
            </Card>
            
            <Card border="danger" className ={"border border-dark bg-secondary text-white"}>
                {/* <Card.Header className="text-center">Track List</Card.Header> */}
                <Card.Body>
                    <Table striped  bordered hover variant="secondary" borderless='True'>
                    
                        <thead>
                        <tr>
                            <td></td>
                            <th>Rank</th>
                            <th>Track Name</th>
                            <th>Track Plays</th>
                            <th>Artist</th>
                            <th>Last Fm</th>
                            <th>Spotify Info</th>
                            
                            
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
                                <td><img src={"https://lastfm.freetls.fastly.net/i/u/64s/"+track.image} width="100" height="100" alt='track img'/></td>
                                <td class="align-middle">{track.rank}</td>
                                {/* <td>{track.song_id}</td> */}
                                <td className="align-middle">{track.name}</td>
                                <td className="align-middle">{track.plays}</td>
                                <td className="align-middle">{track.artist}</td>
                                <td className="align-middle"><a href={"https://www.last.fm"+track.lfm_link}>Link</a></td>
                                <td className="align-middle"><a href={'spotdata/'+ track.lfm_link.slice(7).replace(/\/|%/g,'')}>Spotify Stats</a></td>
                                
                                {/* <td><a href={'artist/'+ track.artist_id}>{track.artist}</a></td> */}
                                
                                
                                
                                
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