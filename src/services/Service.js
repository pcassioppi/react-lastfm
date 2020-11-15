import axios from 'axios'

const API_URL = 'http://localhost:8082/api/';

class UserService{

    

    getAlbums(){
        return axios.get(API_URL+'albums');
    }

    getArtists(){
        return axios.get(API_URL+'artists');
    }

    getArtistById(id){
        return axios.get(API_URL+'artists/${id}');
        
    }

    getTracks(){
        return axios.get(API_URL+'tracks')
    }
}


export default new UserService();

