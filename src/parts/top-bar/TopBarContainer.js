import React, { Component } from 'react';
import { showBackground, hideBackground } from './TopBarActions';
import { connect } from 'react-redux';
import TopBar from './TopBar';

class TopBarContainer extends Component {
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
    const visible = this.props.backgroundVisible;
    if (document.querySelector(".App").scrollTop > 7 && !visible) {
      this.props.dispatch(showBackground());
    } else if (document.querySelector(".App").scrollTop <= 7 && visible){
      this.props.dispatch(hideBackground());
    }
  }
  render() {
    return (
      <TopBar
        backgroundVisible={this.props.backgroundVisible}
        cartTotal={this.props.cartTotal}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    backgroundVisible: store.topBar.backgroundVisible,
    cartTotal: store.cart.cart.length
  }
}

/*function mapDispatchToProps(dispatch) {
  return {
    showBackground: () => {
      dispatch(showBackground())
    },
    hideBackground: () => {
      dispatch(hideBackground())
    }
  }
}*/

export default connect(
  mapStateToProps
)(TopBarContainer);