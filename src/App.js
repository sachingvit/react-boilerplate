import React, { Component } from "react";
import "./assets/css/index.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={require("./assets/images/React-icon.svg.png")} />
        </div>
        <div>Application</div>
      </div>
    );
  }
}
