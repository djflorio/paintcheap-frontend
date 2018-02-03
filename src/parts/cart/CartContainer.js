import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

class CartContainer extends Component {
  render() {
    return (
      <Cart cart={this.props.cart} />
    );
  }
}

function mapStateToProps(store) {
  return {
    cart: store.cart.cart
  }
}

export default connect(mapStateToProps)(CartContainer);