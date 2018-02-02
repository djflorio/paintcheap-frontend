import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import numbro from 'numbro';
import './PaintingGrid.css';

const PaintingGrid = ({paintings, onAddClick}) => {
  return (
    <ul className="painting-grid">
    {
    paintings.map((painting) => {
      return (
        <li className="painting" key={painting.id}>
          <div className="painting__image" style={{ backgroundImage: `url(${painting.image})`}}>
            <div className="painting__overlay">
              <p className="painting__name">{painting.name}</p>
              <p className="painting__artist">{painting.artist}</p>
            </div>
            <img className="painting__item-square" alt="" src={require("../../assets/img/1x1.png")}/>
          </div>
          <div className="painting__info">
            <span className="painting__retail">${numbro(painting.retail_price).format('0,0')}</span><br/>
            <span className="painting__price">${numbro(painting.price).format('0,0')}</span>
            <a className="painting__add" onClick={() => onAddClick(painting)}>
              <FontAwesomeIcon className="painting__add-icon" icon={faShoppingCart} />
              Add to cart
            </a>
          </div>
        </li>
      )
    })
    }
    </ul>
  )
}

PaintingGrid.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      retail_price: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  onAddClick: PropTypes.func
}

export default PaintingGrid;