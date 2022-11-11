import axios from 'axios';

export const client = axios.create({
  baseURL: '/api',
  header: {
    'Content-Type': 'application/json',
  },
});
