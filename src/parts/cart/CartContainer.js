import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCart } from './CartActions';
import Cart from './Cart';

class CartContainer extends Component {
  render() {
    return (
      <Cart
        cart={this.props.cart}
        cartOpen={this.props.cartOpen}
        onCartCloseClick={this.props.onCartCloseClick} />
    );
  }
}

function mapStateToProps(store) {
  return {
    cart: store.cart.cart,
    cartOpen: store.cart.cartOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCartCloseClick: () => {
      dispatch(toggleCart())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);