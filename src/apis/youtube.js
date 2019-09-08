import axios from 'axios';

const KEY = 'AIzaSyDMC1suhyLqGyzbeHStd7ZA7kbZgoso9Ys';
export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult: 5,
        key: KEY
    }
});