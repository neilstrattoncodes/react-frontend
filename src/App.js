import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ListAircraftComponent from "./components/ListAirportsComponent";
import ListAirportsComponent from "./components/ListAirportsComponent";
import ListCitiescomponent from "./components/ListAirportsComponent";
import ListPassengersComponent from "./components/ListAirportsComponent";

import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListAircraftComponent />
        <ListAirportsComponent />
        <ListCitiescomponent />
        <ListPassengersComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
