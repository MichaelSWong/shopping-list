import React from 'react';
import { ItemProps } from './interfaces';
import './App.css';

const Item = ({ item, onRemoveItem }: ItemProps) => {
  return (
    <li>
      {item}
      <button className='delete' onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
};

export default Item;
