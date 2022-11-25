import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://52.3.174.121:3000',
  header: {
    'Content-Type': 'application/json',
  },
});
