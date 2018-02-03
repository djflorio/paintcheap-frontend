import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes, faCreditCard, faTrash } from '@fortawesome/fontawesome-free-solid';
import numbro from 'numbro';
import './Cart.css';

const Cart = ({cart, cartOpen, totalPrice, onCartCloseClick, onDeleteClick}) => {
  const style = {
    display: (cartOpen) ? 'block' : 'none'
  }
  return (
    <div className="cart" style={style}>
      <div className="cart__overlay" onClick={() => onCartCloseClick()}></div>
      <div className="cart__window">
        <a className="cart__close" onClick={() => onCartCloseClick()}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <h3 className="cart__title">Your Art Cart</h3>
        <hr className="cart__title-line"/>
        <table className="cart__table">
          <tbody>
          {
            cart.map((item) => {
              return (
              <tr key={item.id}>
                <td>
                  <FontAwesomeIcon
                    onClick={() => onDeleteClick(item)}
                    className="cart__delete" icon={faTrash} />
                  {item.name}
                </td>
                <td className="cart__money-col">${numbro(item.price).format('0,0')}</td>
              </tr>
              )
            })
          }
            <tr className="cart__total-section">
              <td>Total</td>
              <td>${numbro(totalPrice).format('0,0')}</td>
            </tr>
          </tbody>
        </table>
        <a className="cart__checkout">
          <FontAwesomeIcon className="cart__checkout-icon" icon={faCreditCard} />
          Checkout
        </a>
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
  totalPrice: PropTypes.number,
  onCartCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default Cart;