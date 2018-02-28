import React, { Component } from 'react';
import './list.component.css';

class ListComponent extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item,index) => 
                    <div className='list-item' key={item.id}>
                    <input type="checkbox" />
                    {item.description}
                    </div> 
                    )
                }                
            </div>
        )
    };
}

export default ListComponent