import axios from 'axios'

const API_URL = 'http://localhost:8082/api/';

class UserService{

    

    getAlbums(username){
        return axios.get(API_URL+'userdata/albums/'+username);
    }

    getArtists(username){
        return axios.get(API_URL+'userdata/artists/'+username);
    }

    // getArtistById(id){
    //     return axios.get(API_URL+`artists/${id}`);
        
    // }

    getTracks(username){
        return axios.get(API_URL+'userdata/tracks/'+username)
    }

    getSpotData(id){
        return axios.get(API_URL+'spotdata/'+id)
    }
}


export default new UserService();

