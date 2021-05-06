import React from 'react';
import { toJS } from 'mobx';

import { observer } from 'mobx-react';
import { icons } from '../stores/CardGameStore';

// import PropTypes from 'prop-types';

import '../styles/Card.css';


const Card = observer( ({ card, onClick }) => {

	//only destructure card because onclick might change from time to tiem



    return (
        
        <div className="card face" onClick={(e) => onClick(e)}>

            <div className="card-info" style = {{ color: card.color }} >

                <div className="rank"> {card.rank} </div>
                <img src={icons.get(card.suit)} className="suit" alt={card.suit} />

            </div>

        </div>
    );

})

export default Card;