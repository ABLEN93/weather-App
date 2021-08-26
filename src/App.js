import React, { Component } from "react";
import Wheather from "./Components/Wheather";
import Form from "./Components/Form";
import Data from "./Components/Data";
// import MapTest from "./Components/Map";
import SimpleMap from "./Components/Map";
import "./App.css";
import weather from './images/weather';


// c  onst ApiKey = "9442fd74cbb33752ba35d0918a6c892b";
function App  ()  {
  const getWheather = (e) => {
    e.preventDefault();
    const city = e.target.value;
    const country = e.target.value;
    
  }
    return (
      <div className="App">
      <h1 className="header">Weather App</h1>
        {/* <Form getWheather={this.getWheather } /> */}
        <Data />
        {/* <MapTest/> */}
        
      </div>
    );
  
}
export default App

