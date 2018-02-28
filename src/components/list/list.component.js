import React, { Component } from 'react';
import './list.component.css';

class ListComponent extends Component {
    ToggleCompletion = (clickedListItem) => {
        this.props.onMarkComplete(clickedListItem);
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) =>
                        <div className={'list-item ' + (item.completed ? 'list-item-completed': 'list-item-active')} key={item.id}>
                            <span className="item-description">{item.description}</span>
                            <i
                                onClick={() => this.ToggleCompletion(item)}
                                className={"fa fa-check-circle fa-2x float-right clickable " + 
                                (item.completed ? 'fa-color-green' : 'fa-color-grey')}
                                title="Mark/Unmark Completed"></i>
                        </div>
                    )
                }
            </div>
        )
    };
}

export default ListComponent