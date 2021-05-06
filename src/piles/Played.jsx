import { toJS } from 'mobx';

import { observer } from 'mobx-react';
import { useCardGame } from '../stores/CardGameStore';

import Card from '../components/Card';


const PlayedPile = observer(() => {

    const { playedPile } = useCardGame();

	console.log(toJS(playedPile));

    return (

        <div className={'played'}> 

            { playedPile.filter(card => (card !== undefined)).slice(-2).map( (card) => (

            	<Card card={card} key={card.id} onClick={null} />

            ) ) }

        </div>

    );

})

export default PlayedPile;