import React from 'react';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import cardback from '../other/cardback.svg';



const CompHand = observer(() => {

    const game = useCardGame();

    return (
        <div className='comp hand'>

            { game.compHand.map( (card) => 

            	( <div className="card back" > <img src={cardback} alt='card-back' /> </div> )

            ) }

        </div>

    );

})

export default CompHand;

