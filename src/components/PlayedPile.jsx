import React from 'react';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import Card from '../components/Card';


const PlayedPile = observer(() => {

    const game = useCardGame();

    return (

        <ul className={'played'}> 

            { game.playedPile.slice(-2).map( (card) => ( 

                <Card card={card} key={card.id} onClick={null} /> 

            ) ) }

        </ul>

    );

})

export default PlayedPile;