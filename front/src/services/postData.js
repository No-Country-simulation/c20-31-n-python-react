import axios from 'axios';

const URL = import.meta.env.VITE_BASE_URL;


export const PostData = async (path, data) => {
  const response = await fetch(`http://127.0.0.1:3000/${path}`, {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
