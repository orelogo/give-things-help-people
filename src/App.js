import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

class App extends Component {
  getItems(category) {
    alert('You can get ' + category);
  }
  renderButton(name, category) {
    return <CategoryButton name={name} onClick={() => this.getItems(category)} />;
  }
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
        {this.renderButton("Clothing", "clothing")}
        {this.renderButton("Kitchen Items", "kitchen")}
        {this.renderButton("Bedroom Items", "bedroom")}
        </p>
      </div>
    );
  }
}

function CategoryButton(props) {
  return (
    <button className="btn btn-lg" onClick={() => props.onClick()}>
      {props.name}
    </button>
  );
}

export default App;
