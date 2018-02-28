import React, { Component } from 'react';
import './list.component.css';

class ListComponent extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) =>
                        <div className='list-item' key={item.id}>
                            <span className="item-description">{item.description}</span>
                            <i 
                            className="fa fa-check-circle fa-2x float-right fa-color-grey clickable"
                            title="Mark/Unmark Completed"></i>
                        </div>
                    )
                }
            </div>
        )
    };
}

export default ListComponent