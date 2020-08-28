import axios from 'axios';

// this is tge base url o mke request to the movie database

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;