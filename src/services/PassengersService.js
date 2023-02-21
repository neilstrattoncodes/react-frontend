import axios from "axios";

const PASSENGERS_API_BASE_URL = "http://localhost:8080/passengers";

class PassengersService {
  getPassengers() {
    return axios.get(PASSENGERS_API_BASE_URL);
  }
}

export default new PassengersService();
