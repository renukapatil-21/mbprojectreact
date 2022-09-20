import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import VerticleNav from "./components/VerticleNav";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div class="container-fluid ">
        <div class="row ">
          <div class="col-sm-2 ">
            <Navbar class="bg-dark" />
          </div>
          <hr style={{height: "10px", background: "black"}} class="border-dark"></hr>
          
          <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-2 bg-light">
               <VerticleNav />
            </div>
           
            <div class="col-sm-10">
                <App />
            </div>
        </div>
    </div>

        </div>
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{
  /* <div class="col-sm-10">
            <div class="container-fluid bg-dark">
              <div class="row">
                <div class="col-sm-2">
                  <VerticleNav />
                </div>
                <div class="col-sm-10">
                  <App />
                </div>
              </div>
            </div>
          </div> */
}
