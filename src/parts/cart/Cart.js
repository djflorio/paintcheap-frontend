import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './Cart.css';

const Cart = ({cart, cartOpen, onCartCloseClick}) => {
  const style = {
    display: (cartOpen) ? 'block' : 'none'
  }
  return (
    <div className="cart" style={style}>
      <div className="cart__overlay"></div>
      <div className="cart__window">
        <a className="cart__close" onClick={() => onCartCloseClick()}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <h3 className="cart__title">Your Cart of Art</h3>
        <hr className="cart__title-line"/>
        <ul className="cart__list">
        {
          cart.map((item) => {
            return (
             <li key={item.id}>{item.name}</li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      retail_price: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  cartOpen: PropTypes.bool,
  onCartCloseClick: PropTypes.func
}

export default Cart;