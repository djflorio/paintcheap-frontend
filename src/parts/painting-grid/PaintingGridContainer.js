import React, { Component } from 'react';
import { connect } from 'react-redux';
import paintings from '../../dummyData/paintings';
import PaintingGrid from './PaintingGrid';

class PaintingGridContainer extends Component {
    render() {
        return (
            <PaintingGrid paintings={paintings} />
        );
    }
}

export default PaintingGridContainer;