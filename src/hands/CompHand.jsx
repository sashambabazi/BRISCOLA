import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import cardback from '../other/cardback.svg';



const Hand = observer(( props ) => {

    const { comp } = useCardGame();
    // const game = useCardGame(); // MAKE THIS FUNCTIONAL

    const cardClick = ( event, card ) => {
        
        /////

    }
	
	console.log(toJS(comp.hand));



    return (
        <ul className='comp hand'>

            { comp.hand.map( (card) => (

                <div className='card' key={card.id} > <img src={cardback} alt='card-back'/> </div>

            ) ) }

        </ul>

    );

})

export default Hand;