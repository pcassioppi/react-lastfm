import React, { Component } from "react";
import UserService from "../services/Service";

import {Card, Container, Jumbotron, Col, Row} from 'react-bootstrap';


export default class ArtistPage extends Component{   
    constructor(props){
        super(props);
        this.state ={
            lfm_id:'',
            danceability: '',
            energy:'',
            key:'',
            loudness:'',
            mode:'', 
            speechiness:'', 
            acousticness:'', 
            instrumentalness:'',
            liveness:'', 
            valence:'', 
            tempo:'', 
            duration_ms:'', 
            time_signature:''
            
            
        };
    }

    componentDidMount(){
        
        const trackId = this.props.match.params.id;
        this.byId(trackId);
        
    }

    byId(trackId){
        UserService.getSpotData(trackId).then(response=>{
            if(response.data!=null){
                this.setState({
                    lfm_id: response.data.lfm_id,
                    image: response.data.image,
                    danceability: response.data.danceability,
                    energy: response.data.energy,
                    key: response.data.key,
                    loudness: response.data.loudness,
                    mode: response.data.mode,
                    speechiness: response.data.speechiness,
                    acousticness: response.data.acousticness,
                    instrumentalness: response.data.instrumentalness,
                    liveness: response.data.liveness,
                    valence: response.data.valence,
                    tempo: response.data.tempo,
                    duration_ms: response.data.duration_ms,
                    time_signature: response.data.time_signature,
                    spot_id: response.data.spot_id
                   
                });
            }
            }).catch((error)=>{
                console.error("Error: "+error);
            });
        }
    

  


    render(){
        const {lfm_id, image,danceability,
            energy, key,loudness, mode, speechiness, acousticness, instrumentalness,
            liveness, valence, tempo, duration_ms, time_signature, spot_id} = this.state;

        return(           
            <Container>
                <Col>
                    <Jumbotron>
                        <Row className="text-center">
                            <Col md='auto' >
                                
                                <h1><img src={"https://lastfm.freetls.fastly.net/i/u/64s/"+image} width="100" height="100" alt='track img'/></h1>

                            </Col>
                            <Col>
                                
                                <h2>{lfm_id.split('_')[0].replace(/27/g,"'").replace(/\+/g,' ')}:</h2>
                                <h2> {lfm_id.replace(/\+/g,' ').replace(/27/g,"'").split('_')[1]}</h2>
                            </Col>
                        </Row>

                    </Jumbotron>
                </Col>
                
            <Card border="danger" className ={"border border-dark bg-secondary text-white"}>
                
                <Card.Body>
                    
                    <p>Danceability: {danceability}</p>
                    <p>Energy: {energy}</p>
                    <p>Key: {key}</p>
                    <p>Loudness: {loudness}</p>
                    <p>Mode: {mode}</p>
                    <p>Speechiness: {speechiness}</p>
                    <p>Acousticness: {acousticness}</p>
                    <p>Instrumentalness: {instrumentalness}</p>
                    <p>Liveness: {liveness}</p>
                    <p>Valence: {valence}</p>
                    <p>Tempo: {tempo}</p>
                    <p>Duration (ms): {duration_ms}</p>
                    <p>Time Signature: {time_signature}</p>
                    
                </Card.Body>
            </Card>   
            </Container>     
        );
    };

}