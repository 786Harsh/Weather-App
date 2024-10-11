import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          
        </a>{" "}
         Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/harsh-pawar-b84741276/">
          Harsh Pawar
        </a>{" "}
         {" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
