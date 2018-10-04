import axios from 'axios';

export default axios.create({
  baseURL: window.location.host.includes('localhost') ? `http://localhost:8080/` : `https://nafdac-api.herokuapp.com/`
});