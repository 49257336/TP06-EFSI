import axios from "axios";

const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

export const getCats = async () => {
  const response = await axios.get(URL);
  return response.data;
};