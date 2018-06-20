import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bot from "./components/Bot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Utips official website</h1>
        </header>
        <p className="App-intro">To be continued :)</p>
        <Bot />
      </div>
    );
  }
}

export default App;
