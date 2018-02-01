import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { NavLink } from 'react-router-dom';
import { showBackground, hideBackground } from './TopBarActions';
import { connect } from 'react-redux';
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
    const visible = this.props.backgroundVisible;
    if (document.querySelector(".App").scrollTop > 7 && !visible) {
      this.props.showBackground();
    } else if (document.querySelector(".App").scrollTop <= 7 && visible){
      this.props.hideBackground();
    }
  }
  render() {
    return (
      <div className={"top-bar" + (this.props.backgroundVisible ? ' top-bar--opaque' : '')}>
        <NavLink className="top-bar__home" to='/'>PaintCheap</NavLink>
        <a className="top-bar__cart">
          <FontAwesomeIcon className="top-bar__cart-icon" icon={faShoppingCart} />
          CART (0)
        </a>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    backgroundVisible: store.topBar.backgroundVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showBackground: () => {
      dispatch(showBackground())
    },
    hideBackground: () => {
      dispatch(hideBackground())
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TopBar);