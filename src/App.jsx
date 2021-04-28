import React from 'react';
import { CardGameProvider } from './stores/CardGameStore';

import Game from './game/Game';
import LandingScreen from './other/LandingScreen';
import Other from './other/Other';

import './App.css';





class App extends React.Component {

	state = { gameRunning: false };

	startGame = () => {
		this.setState(state => ({      gameRunning: true    }));
	}


	render() {	

		return (
			
			<div className="App">

				{ (this.state.gameRunning) 
					? <Game /> 
					: <LandingScreen onClick={this.startGame} /> 
				}

				<Other />

			</div>

		);

	}

}

export default App;

