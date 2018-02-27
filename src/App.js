import React, { Component } from 'react';
import './App.css';
import ListItem from './components/list-item/list-item';

class App extends Component {

  state = {
    ListItems: []
  };

  render() {
    return (
      <div>
        <div className="centerAlign">
          <input type="text" placeholder="Add Description" />
          <input type="button" value="Add" onClick={this.AddListItem} />
        </div>

        {/* <ListItem description="hello"></ListItem> */}
      </div>
    );
  }

  ListItems = [];
  AddListItem = () => {
    var newListItem = { id: '', description: '' };
    this.ListItems.push(newListItem);
    this.setState({
      ListItems: this.ListItems
    });
    setTimeout(() => { console.log(this.state.ListItems); }, 100);
  }
}
export default App;