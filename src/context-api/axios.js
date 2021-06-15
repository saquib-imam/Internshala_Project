import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-get-breathe.cloudfunctions.net/api'
    // 'http://localhost:5001/get-breathe/us-central1/api'

});

export default instance;