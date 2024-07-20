import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../actions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity}
                        <button onClick={() => handleAddItem(item)}>+</button>
                        <button onClick={() => handleRemoveItem(item)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
