import React, { Component } from "react";
import AirportsService from "../services/AirportsService";

class ListAirportsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airports: [],
    };
    this.addAirports = this.addAirports.bind(this);
  }

  componentDidMount() {
    AirportsService.getAirports().then((res) => {
      this.setState({ airports: res.data });
    });
  }
  addAirports() {
    this.props.history.push("/add-airports");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Airport List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addAirports}>
            {" "}
            Add Airport
          </button>{" "}
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
