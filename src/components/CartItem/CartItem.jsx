import React from 'react';

const CartItem = ({ id, name, quantity, price, total }) => {
  return (
    <div className="CartItem">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default CartItem;
