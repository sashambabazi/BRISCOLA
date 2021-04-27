import { CardGameProvider } from '../stores/CardGameStore';

import PlayedPile from '../components/PlayedPile';
import Deck from '../components/Deck';
import Hand from '../components/Hand';


import '../styles/Game.css';


const Game = (props) => {

	return (

		<CardGameProvider >

			<div className="game">

		        <div className={'table'}>

		        	<PlayedPile />

		        	<Deck />
	
		        </div>

		        <Hand />

			</div>

    	</CardGameProvider>

	);
}

export default Game;






