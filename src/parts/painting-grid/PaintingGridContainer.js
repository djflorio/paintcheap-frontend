import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaintingGrid from './PaintingGrid';
import {
  fetchPaintings,
  addToCart,
  removeFromCart
} from './PaintingGridActions';

class PaintingGridContainer extends Component {
  componentWillMount() {
    this.props.onMount();
  }
  render() {
    return (
      <PaintingGrid
        paintings={this.props.paintings}
        onAddClick={this.props.onAddClick}/>
    );
  }
}

function mapStateToProps(store) {
  return {
    paintings: store.paintingGrid.paintings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchPaintings());
    },
    onAddClick: id => {
      dispatch(addToCart(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintingGridContainer);