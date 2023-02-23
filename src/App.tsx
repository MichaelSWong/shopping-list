import React from 'react';
import './App.css';
import Header from './Header';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const heading = 'Project 4: Shopping List';
  return (
    <>
      <Header label={heading} />
      <div className='shopping-list'>
        <ShoppingCart />
      </div>
    </>
  );
};

export default App;
