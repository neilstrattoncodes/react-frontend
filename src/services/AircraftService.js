import axios from "axios";

const AIRCRAFT_API_BASE_URL = "http://localhost:8080/aircraft";

class AircraftService {
  getAircrafts() {
    return axios.get(AIRCRAFT_API_BASE_URL);
  }
}

export default new AircraftService();
