import React, { Component } from 'react';
import './App.css';
import List from './components/list.component/list.component';

class App extends Component {

  state = {
    ListItems: [],
    newListItemValue: ''
  };

  render() {
    return (
      <form onSubmit={this.AddListItem} className="centerAlign">
        <input
          type="text"
          placeholder="Add Description"
          value={this.state.descriptionInputbox}
          onChange={(e) => this.descriptionChanged(e.target.value)} />

        <input type="button" value="Add" onClick={this.AddListItem} />

        {<List items={this.state.ListItems} />}
      </form>
    );
  }

  descriptionChanged(_newValue) {
    this.setState({
      newListItemValue: _newValue
    });
  }

  ListItems = [];
  AddListItem = (event) => {
    event.preventDefault();
    var newListItem = { id: this.state.ListItems.length, description: this.state.newListItemValue };
    this.ListItems.push(newListItem);
    this.setState({
      ListItems: this.ListItems
    });
  }
}
export default App;