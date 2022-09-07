import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';

const itemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount/>
        </div>
    )
}

export default itemListContainer;