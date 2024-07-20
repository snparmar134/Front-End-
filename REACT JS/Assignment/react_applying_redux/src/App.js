import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cartCount);

  return (
    <div className="App">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <p>Items in Cart: {cartCount}</p>
        <button onClick={() => dispatch(addItem())}>Add Item</button>
        <button 
          onClick={() => dispatch(removeItem())} 
          disabled={cartCount === 0}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default App;
