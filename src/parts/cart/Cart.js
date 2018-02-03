import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  return (
    <div className="cart">
      <div className="cart__overlay"></div>
      <div className="cart__window">
        <h3 className="cart__title">Your Cart of Art</h3>
        <hr className="cart__title-line"/>
        <ul className="cart__list">
        {
          cart.map((item) => {
            <li key={item.id}>{item.name}</li>
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default Cart;