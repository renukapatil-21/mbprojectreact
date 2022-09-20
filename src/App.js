import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PatientComponent from "./components/patient/patientcomponent";
import DoctorComponent from "./components/doctor/doctorcomponent";
import OPD from "./components/OPD";
import IPD from "./components/IPD";
import Room from "./components/Room";
import Ward from "./components/Ward";
import Nurse from "./components/Nurse";
import Wardboy from "./components/Wardboy";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Patient">
        <PatientComponent />
      </Route>

      <Route path="/Doctor">
        <DoctorComponent />
      </Route>

      <Route path="/OPD">
        <OPD />
      </Route>

      <Route path="/IPD">
        <IPD />
      </Route>

      <Route path="/Room">
        <Room />
      </Route>

      <Route path="/Ward">
        <Ward />
      </Route>

      <Route path="/Nurse">
        <Nurse />
      </Route>

      <Route path="/Wardboy">
        <Wardboy />
      </Route>

    </Switch>
  );
};

export default App;
