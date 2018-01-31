import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { NavLink } from 'react-router-dom';
import './TopBar.css';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    document.querySelector(".App").addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    document.querySelector(".App").removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    if (document.querySelector(".App").scrollTop > 3) {

    }
  }
  render() {
    return (
      <div className={"top-bar" + (this.props.opaque ? ' top-bar--opaque' : '')}>
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