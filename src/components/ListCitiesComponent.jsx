import React, { Component } from "react";
import CitiesService from "../services/CitiesService";

class ListCitiesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    CitiesService.getCities().then((res) => {
      this.setState({ cities: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Cities List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>City Name</th>
                <th>City State</th>
                <th>City Population</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cities.map((city) => (
                <tr key={city.id}>
                  <td>{city.name}</td>
                  <td>{city.state}</td>
                  <td>{city.population}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCitiesComponent;
