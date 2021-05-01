import React from 'react';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import Card from '../components/Card';


const Hand = observer(() => {

    const game = useCardGame();

    const cardClick = (event, card) => {
        let clickedCard = event.target; // FIX this apparently applies to every internal element within card

        console.log(clickedCard);

        (clickedCard.classList.contains("selected"))
            ? game.playCard(card)
            : clickedCard.classList.add("selected");  //add line that removes selected from others

    }


    return (
        <ul className='player hand'>

            { game.playerHand.map( (card) => ( 

                <Card card={card} key={card.id} onClick={(event, card) => cardClick(event, card)} /> 

            ) ) }

        </ul>

    );

})

export default Hand;