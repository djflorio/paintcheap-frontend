import React from 'react';
import PaintingGrid from '../parts/painting-grid/PaintingGrid';
import './Paintings.css';

const Paintings = (props) => {
  return (
    <section className="paintings">
        <PaintingGrid />
    </section>
  );
}

export default Paintings;