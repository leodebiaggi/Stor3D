import './CartItem.css';
import React from 'react';

const CartItem = ({ id, name, quantity, price }) => {
  return (
    <div className="CartItem">
      <div className="CartItem-info">
        <p className="CartItem-title">ID:</p>
        <p className="CartItem-value">{id}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Name:</p>
        <p className="CartItem-value">{name}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Quantity:</p>
        <p className="CartItem-value">{quantity}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Price:</p>
        <p className="CartItem-value">${price}</p>
      </div>
    </div>
  );
};

export default CartItem;

