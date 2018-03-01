import React, { Component } from 'react';
import './App.css';
import List from './components/list/list.component';
import FilterList from "./components/filter-list/filter-list.component";
import AddListItemComponent from './components/add-list-item/add-list-item.component';

class App extends Component {

  state = {
    ListItems: [],
    newListItemValue: ''
  };

  render() {
    return (
      <div className="centerAlign">
        <div className="offset-sm-1 col-sm-10 offset-md-4 col-md-8">
          <AddListItemComponent GetListItem={this.AddListItem} />
        </div>
        <div>
          <FilterList />
          {<List onMarkComplete={this.UpdateListItemStatus} items={this.state.ListItems} />}
        </div>
      </div>
    );
  }

  UpdateListItemStatus = (clickedListItem) => {
    for (let i = 0; i < this.ListItems.length; i++) {
      if (this.ListItems[i].id == clickedListItem.id) {
        this.ListItems[i].completed = !clickedListItem.completed;
        break;
      }
    }

    this.setState({
      ListItems: this.ListItems
    });
  }

  descriptionChanged(_newValue) {
    this.setState({
      newListItemValue: _newValue
    });
  }

  ListItems = [];
  AddListItem = (event) => {
    console.log(event);
    var newListItem = {
      id: this.state.ListItems.length,
      description: event.description,
      completed: event.completed
    };
    this.ListItems.push(newListItem);
    this.setState({
      ListItems: this.ListItems
    });
  }
}
export default App;