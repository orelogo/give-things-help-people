import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Give Things, Help People</h2>
        </div>
        <p className="App-intro">
          Thank you for visiting Give Things, Help People.
          Click on the type of donation you would like to give!
        </p>
        <p className="App-buttons">
        <button onClick={() => alert("click")}>Clothing</button>
        <button>Kitchen Items</button>
        <button>Bedroom Items</button>
        </p>
      </div>
    );
  }
}

export default App;
