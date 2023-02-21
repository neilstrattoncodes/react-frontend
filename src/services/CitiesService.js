import axios from "axios";

const CITIES_API_BASE_URL = "http://localhost:8080/cities";

class CitiesService {
  getCities() {
    return axios.get(CITIES_API_BASE_URL);
  }
}

export default new CitiesService();
