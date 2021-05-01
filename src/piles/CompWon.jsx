import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import cardback from '../other/cardback.svg';


const CompWon = observer(() => {

    const game = useCardGame();

    return (

        <div className='comp won'> 

            { game.compWon.slice(-3).map( (card) => 

            	( <div className="card back" > <img src={cardback} alt='card-back' /> </div> )

            ) }

        </div>

    );

})

export default CompWon;