import React, { setState } from 'react';
import '../styles/List.scss';
import { Link } from 'react-router-dom';

export const CategoriesList = (props) => {
    
        const addActiveItem = (index) => {
            setState({
                activeItem: index
            });
        }

    
        return (
            <div>
                <ul className="list-group list-categories">
                    {
                        props.items.map((item,index) => 
                            <li key={index} className={this.state.activeItem === index ? 'list-group-item active': 'list-group-item'}
                            onClick={addActiveItem.bind(this, index)}>
                                <Link to={ `/category/${item.name.replace(' & ', 'and').toLowerCase()}` }>
                                    <i className="material-icons">
                                        { item.icon }
                                    </i>

                                    <span className='item-name'>
                                    { item.name }
                                    </span>                            
                                </Link>
                            </li>
                        )   
                    }
                </ul>
            </div>
        );
    }
