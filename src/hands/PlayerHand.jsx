import { toJS } from 'mobx';

import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import Card from '../components/Card';


const Hand = observer(() => {

    const { user } = useCardGame();
    // const game = useCardGame(); // MAKE THIS FUNCTIONAL

    const cardClick = ( event, card ) => {
        
        let clickedCard = event.target; // FIX this apparently applies to every internal element within card

        (clickedCard.classList.contains("selected"))
            ? user.play(card)
            : clickedCard.classList.add("selected");  //add line that removes selected from others

    }


    console.log(toJS(user.hand));



    return (
        <ul className='player hand'>

            { user.hand.map( (card) => (

                <Card card={card} key={card.id} onClick={(event, card) => cardClick(event, card)} /> 

            ) ) }

        </ul>

    );

})

export default Hand;