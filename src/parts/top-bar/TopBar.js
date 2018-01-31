import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { NavLink } from 'react-router-dom';
import './TopBar.css';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <NavLink className="top-bar__home" to='/'>PaintCheap</NavLink>
        <a className="top-bar__cart">
          <FontAwesomeIcon className="top-bar__cart-icon" icon={faShoppingCart} />
          CART (0)
        </a>
      </div>
    );
  }
}

export default TopBar;