import React, { Component } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Cider",
          price: "5"
        },
        {
          name: "eggs",
          price: "3"
        },
        {
          name: "fancy cheese",
          price: "7"
        }
      ]
    };
  }
  render() {

    const itemLists = this.state.items.map((item, index) => (
      <ItemList key={item.name} item={item} onDelete = {() => this.removeItem(index)}/>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Awesome Shopping List</h1>
        </header>
        <div className="main_list">
          {itemLists}
          <ItemForm onSubmit={this.addContact.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
