import React, { Component } from 'react';
import './App.css';
import ListItem from './components/list-item/list-item';

class App extends Component {

  state = {
    ListItems: [],
    newListItemValue: ''
  };

  render() {
    this.GenerateList();
    return (
      <div>
        <div className="centerAlign">
          <input
            type="text"
            placeholder="Add Description"
            value={this.state.descriptionInputbox}
            onChange={(e) => this.descriptionChanged(e.target.value)} />
          <input type="button" value="Add" onClick={this.AddListItem} />
        </div>

        {/* <ListItem description="hello"></ListItem> */}
        {this.ListItemGroup}
      </div>
    );
  }

  descriptionChanged(_newValue) {
    this.setState({
      newListItemValue: _newValue
    });
  }

  ListItems = [];
  AddListItem = () => {
    var newListItem = { id: this.state.ListItems.length, description: this.state.newListItemValue };
    this.ListItems.push(newListItem);
    this.setState({
      ListItems: this.ListItems
    });
    setTimeout(() => { console.log(this.state.ListItems); }, 100);
  }

  ListItemGroup = [];
  GenerateList() {
    for (let _listItem of this.state.ListItems) {
      this.ListItemGroup.push(
        <ListItem key={_listItem.id} description={_listItem.description}></ListItem>
      );
    }
  }
}
export default App;