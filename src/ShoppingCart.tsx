import React, { FormEvent, useState } from 'react';
import Item from './Item';
import './App.css';

const ShoppingCart = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const onRemoveItem = (itemToRemove: string) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  };

  const shoppingHeading = 'Items to buy';

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (newItem.trim() === '') return;
    const newItems = [...items, newItem.trim()];
    setItems(newItems);
    setNewItem('');
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  return (
    <>
      <h2>{shoppingHeading}</h2>
      <form onSubmit={submitHandler}>
        <input
          aria-label='Add a new item'
          type='text'
          name='item'
          placeholder='Add a new item'
          value={newItem}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
      <ul>
        {items.length === 0 ? (
          <h3>No items in Cart</h3>
        ) : (
          items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))
        )}
      </ul>
    </>
  );
};

export default ShoppingCart;
