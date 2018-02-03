import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

class CartContainer extends Component {
  render() {
    return (
      <Cart
        cart={this.props.cart}
        cartOpen={this.props.cartOpen} />
    );
  }
}

function mapStateToProps(store) {
  return {
    cart: store.cart.cart,
    cartOpen: store.cart.cartOpen
  }
}

export default connect(mapStateToProps)(CartContainer);