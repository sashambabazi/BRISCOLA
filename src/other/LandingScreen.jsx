

import PlayedPile from '../components/PlayedPile';
import Deck from '../components/Deck';
import Hand from '../components/Hand';

// import briscolaBanner from '../other/briscolaBanner.svg';


const LandingScreen = (props) => {
	
	return (

		<div className="game">

	        <h3> BRISCOLA </h3>
	        {/*<img src={briscolaBanner} className="back-image" alt='card-back' />*/}

			<button onClick={(e) => props.onClick(e)}>
				PLAY GAME
			</button>

		</div>

	);
}

export default LandingScreen;






