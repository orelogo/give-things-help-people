import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
let jsonData = require('./items.json').items

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfItems: null,
    }
  }
  renderItem(name, required, pledged) {
    return <Item name={name} required={required} pledged={pledged} />;
  }

  getItems(category) {
    let items = [];
    for (let i = 0; i < jsonData.length; i++) {
    	let item = jsonData[i];
      if (item.category === category) {
        items.push(item);
      }
    }
    this.setState({
      listOfItems: items
    })
  }

  renderButton(name, category) {
    return <CategoryButton name={name} onClick={() => this.getItems(category)} />;
  }

  renderItems() {
    let items = this.state.listOfItems;
    for (let i = 0; i < items.length; i++) {
      renderItem(item.name, item.required, item.pledged);
    }
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
        <ul>
          {renderItems()}
        </ul>
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

function Item(props) {
  return (
    <li>
    {props.name}, Required: {props.required}, Pledged: {props.pledged}
    </li>
  );
}


export default App;
