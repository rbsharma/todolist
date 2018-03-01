import React, { Component } from 'react';
import './add-list-item.component.css';

class AddListItemComponent extends Component {
    state = {
        newListItemValue: ''
    };

    descriptionChanged(_newValue) {
        this.setState({
            newListItemValue: _newValue
        });
    }

    AddButtonClicked = (event) => {
        event.preventDefault();
        var newListItem = {
            description: this.state.newListItemValue,
            completed: false
        };

        this.props.GetListItem(newListItem);
    }

    render() {
        return (
            <form onSubmit={this.AddButtonClicked}>
                <div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control col-md-6"
                            placeholder="Add Description Component"
                            value={this.state.newListItemValue}
                            onChange={(e) => { this.descriptionChanged(e.target.value) }} />

                        <span className="input-group-btn">
                            <button
                                // style={{ borderRadius: '0' }}
                                className="btn btn-primary border-radius-0"
                                disabled={!this.state.newListItemValue}
                                type="button"
                                onClick={this.AddButtonClicked}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddListItemComponent;