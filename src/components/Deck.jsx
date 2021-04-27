import React from 'react';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import cardback from '../other/cardback.svg';


const Deck = observer(() => {

    const game = useCardGame();

    return (

        <div className='deck' onClick={ ()=>game.dealCard() } >

            {(game.gameDeck.length > 0)
                ? ( <div className="card" > <img src={cardback} className="back-image" alt='card-back' /> </div> )
                : ( <div className="empty-deck" /> )
            }
          
        </div>

    );

})

export default Deck;
