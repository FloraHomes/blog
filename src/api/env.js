import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_BASE_URL;
const client = create({
  baseURL,
});

export const config = async () => {
  const token = await localStorage.getItem(process.env.TOKEN_KEY);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
};
export const authConfig = async (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  };
};

export default client;
