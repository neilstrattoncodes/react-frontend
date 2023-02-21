import React, { Component } from "react";
import AirportsService from "../services/AirportsService";

class ListAirportsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airports: [],
    };
  }

  componentDidMount() {
    AirportsService.getAirports().then((res) => {
      this.setState({ airports: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Airport List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Airport Name</th>
                <th>Airport Code</th>
              </tr>
            </thead>
            <tbody>
              {this.state.airports.map((airport) => (
                <tr key={airport.id}>
                  <td>{airport.name}</td>
                  <td>{airport.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAirportsComponent;
