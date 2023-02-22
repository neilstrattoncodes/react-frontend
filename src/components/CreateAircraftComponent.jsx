import React, { Component } from "react";

class CreateAircraftComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      airlineName: "",
      numberOfPassengers: "",
    };

    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changeAirlineNameHandler = this.changeAirlineNameHandler.bind(this);
    this.changeNumberOfPassengersHandler =
      this.changeNumberOfPassengersHandler.bind(this);
    this.saveAircraft = this.saveAircraft.bind(this);
  }

  saveAircraft = (e) => {
    e.preventDefault();
    let aircraft = {
      type: this.state.type,
      airlineName: this.state.airlineName,
      numberOfPassengers: this.state.numberOfPassengers,
    };
    console.log("aircraft =>" + JSON.stringify(aircraft));
  };

  changeTypeHandler = (event) => {
    this.setState({ type: event.target.value });
  };

  changeAirlineNameHandler = (event) => {
    this.setState({ airlineName: event.target.value });
  };

  changeNumberOfPassengersHandler = (event) => {
    this.setState({ numberOfPassengers: event.target.value });
  };

  cancel() {
    this.props.history.push("/aircraft");
  }

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
                  <button
                    className="btn btn-success"
                    onClick={this.saveAircraft}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
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
