import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ListAircraftComponent from "./components/ListAircraftComponent";
import ListAirportsComponent from "./components/ListAirportsComponent";
import ListCitiescomponent from "./components/ListCitiesComponent";
import ListPassengersComponent from "./components/ListPassengersComponent";
import CreateAircraftComponent from "./components/CreateAircraftComponent";
import CreateAirportsComponent from "./components/CreateAirportsComponent";
import CreateCitiesComponent from "./components/CreateCitiesComponent";
import CreatePassengersComponent from "./components/CreatePassengersComponent";

import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/aircraft" element={<ListAircraftComponent />} />
          <Route path="/airports" element={<ListAirportsComponent />} />
          <Route path="/cities" element={<ListCitiescomponent />} />
          <Route path="/airports" element={<ListPassengersComponent />} />
          <Route path="/add-aircraft" element={<CreateAircraftComponent />} />
          <Route path="/add-airports" element={<CreateAirportsComponent />} />
          <Route path="/add-cities" element={<CreateCitiesComponent />} />
          <Route
            path="/add-passengers"
            element={<CreatePassengersComponent />}
          />
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
