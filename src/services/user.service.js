import axios from "axios";
import authHeader from "./auth-header";
// const API_URL = "https://barber-shopbackend.herokuapp.com/barbers";
const API_URL = "http://localhost:3000/barbers";
class UserService {
  getPublicContent() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
export default new UserService();