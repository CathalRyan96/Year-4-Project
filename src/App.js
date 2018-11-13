import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    const classes = "badge m-4 badge-";

    return (
      <div>
        <h1>Fitness Web App</h1>
        <button className="btn btn-warning btn-sm m-4">
          Hurling Exercises
        </button>
        <button className="btn btn-warning btn-sm m-4">
          Football Exercises
        </button>
        <button className="btn btn-warning btn-sm m-4">Rugby Exercises</button>
        <button className="btn btn-warning btn-sm m-4">Soccer Exercises</button>
      </div>
    );
  }
}

export default App;
