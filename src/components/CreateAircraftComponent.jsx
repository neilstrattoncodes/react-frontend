import React, { Component } from "react";

class CreateAircraftComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      airlineName: "",
      numberOfPassengers: "",
    };
  }

  changeTypeHandler = (event) => {
    this.setState({ type: event.target.value });
  };

  changeAirlineNameHandler = (event) => {
    this.setState({ airlineName: event.target.value });
  };

  changeNumberOfPassengersHandler = (event) => {
    this.setState({ numberOfPassengers: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Aircraft</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Aircraft Type: </label>
                    <input
                      placeholder="Aircraft Type"
                      name="type"
                      className="form-control"
                      value={this.state.type}
                      onChange={this.changeTypeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Airline Name </label>
                    <input
                      placeholder="Airline Name"
                      name="airlineName"
                      className="form-control"
                      value={this.state.airlineName}
                      onChange={this.changeAirlineNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Number of Passengers </label>
                    <input
                      placeholder="Number of Passengers"
                      name="numberOfPassengers"
                      className="form-control"
                      value={this.state.numberOfPassengers}
                      onChange={this.changeNumberOfPassengersHandler}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAircraftComponent;
