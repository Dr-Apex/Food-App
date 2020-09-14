// npm install axios
import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '99d955301594bc1b81ba69fef3d76d21'
  }
});
