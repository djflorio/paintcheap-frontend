import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { NavLink } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({backgroundVisible, cartTotal, onCartClick}) => {
  return (
    <div className={"top-bar" + (backgroundVisible ? ' top-bar--opaque' : '')}>
      <NavLink className="top-bar__home" to='/'>PaintCheap</NavLink>
      <a className="top-bar__cart" onClick={() => onCartClick()}>
        <FontAwesomeIcon className="top-bar__cart-icon" icon={faShoppingCart} />
        CART ({cartTotal})
      </a>
    </div>
  );
}

TopBar.propTypes = {
  backgroundVisible: PropTypes.bool,
  cartTotal: PropTypes.number,
  onCartClick: PropTypes.func
}

export default TopBar;