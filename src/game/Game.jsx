import CardGame, { CardGameProvider } from '../stores/CardGameStore';

// import TestDash from '../test/TestDash';

import Deck from '../components/Deck';
import Menu from '../components/Menu';

import Played from '../piles/Played';
import PlayerWon from '../piles/PlayerWon';
import CompWon from '../piles/CompWon';

import PlayerHand from '../hands/PlayerHand';
import CompHand from '../hands/CompHand';

import '../styles/Game.css';
import '../styles/Hands.css';
import '../styles/Piles.css';


const game = new CardGame();

const Game = () => {

	return (

		<CardGameProvider game = {game} >
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






