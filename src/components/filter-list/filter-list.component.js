import React, { Component } from 'react';
import './filter-list.component.css';

class FilterListComponent extends Component {

    FilterClicked = (event) => {
        let _filterName=event.currentTarget.textContent;
        this.props.GetFilterName(_filterName);
    }

    render() {
        return (
            <div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a className="clickable" onClick={this.FilterClicked}>All</a></li>
                    <li className="list-inline-item">
                        <a className="clickable" onClick={this.FilterClicked}>Active</a></li>
                    <li className="list-inline-item">
                        <a className="clickable" onClick={this.FilterClicked}>Completed</a></li>
                </ul>
            </div>
        );
    }
}

export default FilterListComponent;