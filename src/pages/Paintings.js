import React from 'react';
import paintings from '../dummyData/paintings';
import './Paintings.css';

const Paintings = (props) => {
  return (
    <section className="paintings">
        <ul className="paintings__list">
        {
        paintings.map((painting) => {
            return (
                <li className="paintings__item">
                    <img className="paintings__item-square" src={require("../assets/img/1x1.png")}/>
                </li>
            )
        })
        }
        </ul>
    </section>
  );
}

export default Paintings;