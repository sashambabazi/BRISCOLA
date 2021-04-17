import React from 'react';
import cardback from '../other/cardback.svg';

import '../styles/Card.css';


function CardBack() {
    return (
      <div className="card-face" > 
          <img src={cardback} className="back-image" alt='card-back' />
      </div >

    );

}


export default CardBack;