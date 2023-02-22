import React, { Component } from "react";
import AircraftService from "../services/AircraftService";

class ListAircraftComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aircrafts: [],
    };
    this.addAircraft = this.addAircraft.bind(this);
  }

  componentDidMount() {
    AircraftService.getAircrafts().then((res) => {
      this.setState({ aircrafts: res.data });
    });
  }

  addAircraft() {
    this.props.history.push("/add-aircraft");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Aircraft List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addAircraft}>
            {" "}
            Add Aircraft
          </button>{" "}
        </div>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Aircraft Type</th>
                <th>Airline Name</th>
                <th>Number of Passengers</th>
              </tr>
            </thead>
            <tbody>
              {this.state.aircrafts.map((aircraft) => (
                <tr key={aircraft.id}>
                  <td>{aircraft.type}</td>
                  <td>{aircraft.airlineName}</td>
                  <td>{aircraft.numberOfPassengers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAircraftComponent;
