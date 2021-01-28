import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AlbumTable from './components/AlbumTable'
import ArtistTable from './components/ArtistTable'
import TrackTable from './components/TrackTable'
import UserForm from './components/form'
import TrackDataPage from './components/TrackDataPage'

import {Container} from 'react-bootstrap';
// import ArtistPage from './components/ArtistPage';
import NavigationBar from './components/NavigationBar'

export default class App extends Component {

  render(){
  return (

    // <div classname="App">
    //     <AlbumTable/>
    // </div>
    <div className='bg-dark'>
    
    <Router >
        <NavigationBar/>
        {/* <Container>asdajklfh</Container> */}
        <Container>
            {/* <Row> */}
                {/* <Col lg={12} className={"margin-top"}> */}
                    <Switch>
                        
                        {/* <Route path="/artist/:id" exact component={ArtistPage}/> */}
                        <Route path="/artists" exact component={ArtistTable}/>
                        <Route path="/tracks" exact component={TrackTable}/>                                               
                        <Route path="/albums" exact component={AlbumTable} />
                        <Route path="/spotdata/:id" exact component={TrackDataPage}/>
                        <Route path="" exact component={UserForm} />
                      </Switch>
                {/* </Col> */}
            {/* </Row> */}
        </Container>
      </Router>
    </div>
  );
}
}

