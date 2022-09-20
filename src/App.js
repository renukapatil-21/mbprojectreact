import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PatientComponent from "./components/patient/patientcomponent";
import DoctorComponent from "./components/doctor/doctorcomponent";
import WardboyComponent from "./components/wardboy/wardboycomponent";
import OPD from "./components/OPD";
import IPD from "./components/IPD";
import RoomComponent from "./components/room/roomcomponent";
import WardComponent from "./components/ward/wardcomponent";
import NurseComponent from "./components/nurse/nursecomponent";


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
        <RoomComponent />
      </Route>

      <Route path="/Ward">
        <WardComponent />
      </Route>

      <Route path="/Nurse">
        <NurseComponent />
      </Route>

      <Route path="/Wardboy">
        <WardboyComponent />
      </Route>

    </Switch>
  );
};

export default App;
