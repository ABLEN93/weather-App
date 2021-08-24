import React, { Component } from "react";
import Wheather from "./Components/Wheather";
import Form from "./Components/Form";
import Data from "./Components/Data";


// c  onst ApiKey = "9442fd74cbb33752ba35d0918a6c892b";
class App extends Component {
  getWheather = (e) => {
    e.preventDefault();
    const city = e.target.value;
    const country = e.target.value;
    
  }
  render() {
    return (
      <div className="App">
        Wheather App
        {/* <Form getWheather={this.getWheather } /> */}
        <Data />
      </div>
    );
  }

  
}

export default App;
