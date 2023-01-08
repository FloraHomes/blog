import { create } from "apisauce";

import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = process.env.BASE_URL;
const client = create({
  BASE_URL,
});

export const config = async () => {
  const token = await AsyncStorage.getItem(process.env.TOKEN_KEY);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
};
export const authConfig = async (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
};

export default client;
