import React, { Component } from "react";
import UserService from "../services/Service";
import { Link } from "react-router-dom";

import {Card, Table, Button, Container, Jumbotron} from 'react-bootstrap';



const user = localStorage.getItem('username')

export default class AlbumTable extends Component{   
    constructor(props){
        super(props);
        this.state ={
            albums:[]
        };
    }

    componentDidMount(){
        UserService.getAlbums(user).then((response)=>{
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
        const {albums } = this.state;

        return(
            <Container>
            <Jumbotron className="text-center">
                <h1>Last.FM album stats for {user}</h1>
                <br></br>
                <div> To see your album or track stats, click on the links at the top of the page.</div>
                <br></br>
                <div>To return to the home page and find the info of another user, click the button below.</div>
                <br></br>
                <p>
                    <Link to={""}>
                        <Button variant='primary'>Home</Button>
                    </Link>
                </p>
                
            </Jumbotron>
            
            <Card border="danger" className ={"border border-dark bg-secondary text-white"}>
                {/* <Card.Header className="text-center">Album List</Card.Header> */}
                <Card.Body>
                    <Table striped  bordered hover variant="secondary" borderless='True'>
                        <thead>
                        <tr>
                            <td></td>
                            <th>Rank</th>
                            <th>Album Name</th>
                            <th>Album Plays</th>
                            <th>Last Fm</th>
                            <th>Artist</th>
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

                                <td className="align-middle"><img src={"https://lastfm.freetls.fastly.net/i/u/64s/"+album.image} alt='track img' width="100" height="100"/></td>
                                <td className="align-middle">{parseInt(album.album_id.split(':')[1])+1}</td>
                                <td className="align-middle">{album.name}</td>
                                <td className="align-middle">{album.plays}</td>
                                <td className="align-middle"><a href={"https://www.last.fm"+album.lfm_link}>Link</a></td>
                                {/* <td><a href={'artist/'+ album.artist_id}>{album.artist}</a></td> */}
                                <td className="align-middle">{album.artist}</td>
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