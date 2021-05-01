import React from 'react';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import Card from '../components/Card';
import cardback from '../other/cardback.svg';

import '../styles/Deck.css';


const Deck = observer(() => {

    const game = useCardGame();
    
    return (

        <div className='deck' onClick={() => game.dealCard()}>
        
            { (game.gameDeck.length > 0)
                ? ( <div className="brisc"> <Card card={game.brisc} key={game.brisc.id} /> </div> )
                : null
            }

            { (game.gameDeck.length > 1)
                ? ( <div className="card back"> <img src={cardback} alt='card-back' /> </div> )
                : null
            }
          
        
        </div>

    );

})

export default Deck;
