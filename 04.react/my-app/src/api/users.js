import axios from "axios";

export const getUsers = async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.get(url);
  return response;
};
