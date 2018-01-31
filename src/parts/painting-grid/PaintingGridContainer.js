import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaintingGrid from './PaintingGrid';
import { fetchPaintings } from './PaintingGridActions';

class PaintingGridContainer extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPaintings());
    }
    render() {
        return (
            <PaintingGrid paintings={this.props.paintings} />
        );
    }
}

function mapStateToProps(store) {
    return {
        paintings: store.paintingGrid.paintings
    }
}

export default connect(mapStateToProps)(PaintingGridContainer);