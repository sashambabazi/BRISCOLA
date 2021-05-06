import React from 'react';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import Card from '../components/Card';
import cardback from '../other/cardback.svg';

import '../styles/Deck.css';


const Deck = observer(() => {

    const { gameDeck, brisc, dealCard } = useCardGame();
    
    return (

        <div className='deck' onClick={() => dealCard()}>
        
            { (gameDeck.length > 0)
                ? ( <div className="brisc"> <Card card={brisc} key={brisc.id} /> </div> )
                : null
            }

            { (gameDeck.length > 1)
                ? ( <div className='card back'> <img src={cardback} alt='card-back' /> </div> )
                : null
            }
          
        
        </div>

    );

})

export default Deck;
