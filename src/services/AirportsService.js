import axios from "axios";

const AIRPORTS_API_BASE_URL = "http://localhost:8080/airports";

class AirportsService {
  getAirports() {
    return axios.get(AIRPORTS_API_BASE_URL);
  }
}

export default new AirportsService();
