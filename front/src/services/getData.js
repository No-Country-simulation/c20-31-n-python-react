import axios from 'axios';

const URL = import.meta.env.VITE_BASE_URL;

export const getData = async (path) => {
  const response = await axios.get(`${URL}/${path}`);
  return response;
};
