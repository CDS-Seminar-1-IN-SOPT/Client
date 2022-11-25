import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://52.3.174.121:3000',
  header: {
    'Content-Type': 'application/json',
  },
});

export const getSchedule = async (scheduleId) => {
  const response = await client.get(`/schedule/${scheduleId}`);
  return response.data.data;
};
