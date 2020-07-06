import axios from 'axios';

const apiGithub = axios.create({
  baseURL: 'https://api.github.com/'
})

export default apiGithub;