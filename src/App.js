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

        <div className="offset-sm-1 offset-md-3 offset-lg-5 col-sm-10 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control col-md-6"
              placeholder="Add Description"
              value={this.state.descriptionInputbox}
              onChange={(e) => this.descriptionChanged(e.target.value)} />

            <span className="input-group-btn">
              <button
                // style={{ borderRadius: '0' }}
                className="btn btn-primary border-radius-0"
                disabled={!this.state.newListItemValue}
                type="button"
                onClick={this.AddListItem}>
                <i className="fa fa-plus"></i>
              </button>
            </span>
          </div>
        </div>
        {<List onMarkComplete={this.UpdateListItemStatus} items={this.state.ListItems} />}
      </form>
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
    event.preventDefault();
    var newListItem = {
      id: this.state.ListItems.length,
      description: this.state.newListItemValue,
      completed: false
    };
    this.ListItems.push(newListItem);
    this.setState({
      ListItems: this.ListItems
    });
  }
}
export default App;