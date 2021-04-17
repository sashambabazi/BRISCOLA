import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import PropTypes from 'prop-types';
// import '../styles/PlayerHand.css';


class PlayerHand extends React.Component { //turn into function

	render(props) {

	  	const playerCards = props.hand.map( (card) =>
	  		
	  		<Card rank={card.rank} suit={card.suit} />  //add id or key

	  	);

	    return (
	        <div className='player-hand'>

	        	{playerCards}

	        </div>
	    );

	}

}


PlayerHand.propTypes = {
	hand: PropTypes.arrayOf(PropTypes.object),
	
};

export default PlayerHand;