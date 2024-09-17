import axios from 'axios';

const URL = import.meta.env.VITE_BASE_URL;

export const PostData = async (path, data) => {
  const response = await fetch(`${URL}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response;
};
