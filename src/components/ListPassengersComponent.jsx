import React, { Component } from "react";
import PassengersService from "../services/PassengersService";

class ListPassengersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengers: [],
    };
    this.addPassengers = this.addPassengers.bind(this);
  }

  componentDidMount() {
    PassengersService.getPassengers().then((res) => {
      this.setState({ passengers: res.data });
    });
  }
  addPassengers() {
    this.props.history.push("/add-passengers");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Passengers List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addPassengers}>
            {" "}
            Add Passenger
          </button>{" "}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Passengers First Name</th>
                <th>Passengers Last Name</th>
                <th>Passengers Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {this.state.passengers.map((passenger) => (
                <tr key={passenger.id}>
                  <td>{passenger.firstName}</td>
                  <td>{passenger.lastName}</td>
                  <td>{passenger.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPassengersComponent;
