import axios from "axios";


const ApiUrl = 'https://api.nasa.gov/planetary/apod';
const ApiKey = 'Z8WKk6uZKX4HVpTxLE3GcyO89MraZ5A9p0ATCiV3';

const api = axios.create({
    baseURL: `${ApiUrl}?api_key=${ApiKey}`
})

export default api;