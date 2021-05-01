import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import cardback from '../other/cardback.svg';


const PlayerWon = observer(() => {

    const game = useCardGame();

    return (

        <div className='player won'> 

            { game.playerWon.slice(-3).map( (card) => 

            	( <div className="card back" > <img src={cardback} alt='card-back' /> </div> )

            ) }

        </div>

    );

})

export default PlayerWon;