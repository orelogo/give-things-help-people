import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
let jsonData = require('./items.json').items;

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfItems: null,
      category: null
    }
  }
  renderItem(key, name, required, pledged) {
    return <Item key={key} name={name} required={required} pledged={pledged} onClick={() => this.updateJson(key)}/>;
  }

  updateJson(key) {
    for (let i = 0; i < jsonData.length; i++) {
      let item = jsonData[i];
      if (item.key === key) {
        item.pledged++;
        jsonData[i] = item;
      }
    }
    this.getItems(this.state.category);
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
      listOfItems: items,
      category: category
    })
  }

  renderButton(name, category) {
    return <CategoryButton name={name} onClick={() => this.getItems(category)} />;
  }

  renderItems() {
    return this.state.listOfItems.map(item => {
      return this.renderItem(item.key, item.name, item.needed, item.pledged);
    });
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
        <ul className="list-unstyled">
          {this.state.listOfItems && this.renderItems()}
        </ul>
      </div>
    );
  }
}

function CategoryButton(props) {
  return (
    <button className="btn btn-lg app-btn" onClick={() => props.onClick()}>
      {props.name}
    </button>
  );
}

function Item(props) {
  return (
    <li>
    {props.name}, Required: {props.required}, Pledged: {props.pledged}
    <button className="btn btn-sm btn-success app-btn" onClick={() => props.onClick()}>
      I Pledge To Donate
    </button>
    </li>
  );
}


export default App;
