import React, { Component } from 'react';
import './list-item.css';

class ListItemComponent extends Component {
    render() {
        return (
            <div className='list-item'>
                <input type="checkbox" />
                {this.props.description}
            </div>
        )
    };
}

export default ListItemComponent