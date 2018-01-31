import React from 'react';
import paintings from '../dummyData/paintings';
import numbro from 'numbro';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import './Paintings.css';

const Paintings = (props) => {
  return (
    <section className="paintings">
        <ul className="paintings__list">
        {
        paintings.map((painting) => {
            return (
                <li className="painting" key={painting.id}>
                    <div className="painting__image" style={{ backgroundImage: `url(${painting.image})`}}>
                        <div className="painting__overlay">
                            <p className="painting__name">{painting.name}</p>
                        </div>
                        <img className="painting__item-square" src={require("../assets/img/1x1.png")}/>
                    </div>
                    <div className="painting__info">
                        <span className="painting__retail">${numbro(painting.retail_price).format('0,0')}</span><br/>
                        <span className="painting__price">${painting.price}</span>
                        <a className="painting__add">
                            <FontAwesomeIcon className="painting__add-icon" icon={faShoppingCart} />
                            Add to cart
                        </a>
                    </div>
                </li>
            )
        })
        }
        </ul>
    </section>
  );
}

export default Paintings;