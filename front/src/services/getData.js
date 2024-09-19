import axios from 'axios';

const URL = import.meta.env.VITE_BASE_URL;
const token="";

export const getData = async (path,token) => {
  //const response = await fetch(`${URL}/${path}`);
  const response = await fetch(`http://127.0.0.1:3000/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },

  });
  return response.json();
};
