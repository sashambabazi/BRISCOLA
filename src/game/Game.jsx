import { CardGameProvider } from '../stores/CardGameStore';

import Played from '../piles/Played';
import PlayerWon from '../piles/PlayerWon';
import CompWon from '../piles/CompWon';

import Deck from '../components/Deck';
import PlayerHand from '../components/PlayerHand';
import CompHand from '../components/CompHand';
import Menu from '../components/Menu';

import '../styles/Game.css';
import '../styles/Hands.css';
import '../styles/Piles.css';


const Game = (props) => {

	return (

		<CardGameProvider >
			<div className="game">

	        	<Menu />

		        <CompWon />

		        <PlayerWon />

		        <CompHand />

	        	<Deck />

	        	<Played />

		        <PlayerHand />

			</div>
		</CardGameProvider>

	);
}

export default Game;






