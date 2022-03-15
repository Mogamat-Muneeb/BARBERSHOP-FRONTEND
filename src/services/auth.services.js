import axios from "axios";
const API_URL = "https://barber-shopbackend.herokuapp.com/customers/";
class AuthService {
  async login(customer) {
    return axios
      .post(API_URL + "login", {
        customername: customer.customername,
        password: customer.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("customer", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("customer");
  }
  register(customer) {
    return axios.post(API_URL + "register", {
      customername: customer.customername,
      email: customer.email,
      password: customer.password,
      phone_number: customer.phone_number
    });
  }
}
export default new AuthService();