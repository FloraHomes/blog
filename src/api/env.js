import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_BASE_URL;
const client = create({
  baseURL,
});

export const config = async () => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
};
export const simpleConfig = async () => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

export const authConfig = async () => {
  const token = await localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  };
};

export default client;
