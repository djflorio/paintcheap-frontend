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
        totalPrice={this.props.totalPrice}
        onCartCloseClick={this.props.onCartCloseClick} />
    );
  }
}

function mapStateToProps(store) {
  let totalPrice = 0;
  for (let i=0; i < store.cart.cart.length; i++) {
    totalPrice += store.cart.cart[i].price;
  }
  return {
    cart: store.cart.cart,
    cartOpen: store.cart.cartOpen,
    totalPrice: totalPrice
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