import briscolaBanner from '../other/briscolaBanner.svg';
import '../styles/Landing.css';


const LandingScreen = (props) => {
	
	return (

		<div className="game">
			
			<div className="landing">

		        <img src={briscolaBanner} alt='Briscola' />

				<button className="button start" onClick={(e) => props.onClick(e)}>
					START GAME
				</button>
	
			</div>

		</div>

	);
}

export default LandingScreen;






