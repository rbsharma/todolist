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
                className="btn btn-primary"
                disabled={!this.state.newListItemValue}
                type="button"
                onClick={this.AddListItem}>Add</button>
            </span>
          </div>
        </div>
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
    var newListItem = {
      id: this.state.ListItems.length,
      description: this.state.newListItemValue,
      status: 0
    };
    this.ListItems.push(newListItem);
    this.setState({
      ListItems: this.ListItems
    });
  }
}
export default App;