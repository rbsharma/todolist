import React, { Component } from 'react';
import './filter-list.component.css';

class FilterListComponent extends Component {
    render() {
        return (
            <div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="">All</a></li>
                    <li className="list-inline-item"><a href="">Active</a></li>
                    <li className="list-inline-item"><a href="">Completed</a></li>
                </ul>
            </div>
        );
    }
}

export default FilterListComponent;