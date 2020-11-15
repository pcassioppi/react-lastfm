// import React, {Component} from 'react';
// import axios from 'axios'
// import {Card,Form, Button, Container} from 'react-bootstrap';
// import UserService from "../services/Service";

// const API_URL = 'http://localhost:8082/api'


// export default class UserProfile extends Component{

    
      
//     constructor() {
// 		super();
//         this.state = {
//             users:[],
//         };
//     }   

//     componentDidMount(){
//         UserService.getUsers().then((response)=>{
//             this.setState({
//                 users:response.data
//             });
//         });
//     }
    


//     render(){
//         const{users} = this.state
//         return (
//             <Card border="danger" className ={"border border-dark bg-dark text-white"}>
//                 <Card.Header className="text-center">Last.fm Username Input</Card.Header>
//                     <Card.Body>
                
//                     <div className="form-group">
//                         Welcome {users}
//                     </div>
                    
                    
                    
                    
                
//             </Card.Body>
//             </Card>
//         );
        
//     }
// }