import React from 'react';
import PaintingGridContainer from '../parts/painting-grid/PaintingGridContainer';
import './Paintings.css';

const Paintings = (props) => {
  return (
    <section className="paintings">
        <PaintingGridContainer />
    </section>
  );
}

export default Paintings;