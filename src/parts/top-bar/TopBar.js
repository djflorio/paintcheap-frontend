import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { NavLink } from 'react-router-dom';
import './TopBar.css';

const TopBar = (props) => {
  return (
    <div className={"top-bar" + (props.backgroundVisible ? ' top-bar--opaque' : '')}>
      <NavLink className="top-bar__home" to='/'>PaintCheap</NavLink>
      <a className="top-bar__cart">
        <FontAwesomeIcon className="top-bar__cart-icon" icon={faShoppingCart} />
        CART (0)
      </a>
    </div>
  );
}

export default TopBar;