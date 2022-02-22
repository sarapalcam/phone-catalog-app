import axios from 'axios';

const getAllPhones = () => {
  return axios.get('http://localhost:4000/phones')
    .then(response =>  response.data);
};

export default getAllPhones;


