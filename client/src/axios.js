import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-dongjune.herokuapp.com/",
});
// test
export default instance;
