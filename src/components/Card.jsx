import React from 'react';
import { observer } from 'mobx-react';
import { icons } from '../stores/CardGameStore';

// import PropTypes from 'prop-types';

import '../styles/Card.css';


const Card = observer( ({ card, onClick }) => {

    return (
        
        <li className="card" onClick={(e) => onClick(e, card)}>

            <div style = {{ color: card.color }} >
                <div className="rank"> {card.rank} </div>
                <img src={icons.get(card.suit)} className="suit" alt={card.suit} />
            </div>

        </li>
    );

})

export default Card;