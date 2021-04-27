import React, { useState } from 'react';

import { createContext } from 'react';
import { createUseStyles } from 'react-jss';

import '../styles/Game.css';



let suits = ['clubs', 'spades', 'hearts', 'diamonds'];
let ranks = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];


let deck = [];

for (const suit of suits) {
    for (const rank of ranks) {
        const card = { rank: rank, suit: suit }
        // console.log(card);
        deck.push(card);
    }
}

const game = {
    gameDeck: deck,
    playedPile: [],
    playerHand: [],
}


export const GameContext = createContext();

export default const Game = (props) => {


  const [game, dispatch] = useReducer((game, action) => {
    switch(action.type) {
      case 'deal':

            let currentDeck = game.gameDeck;

            let topCard = currentDeck.pop();

            let currentPlayerHand = game.playerHand;

            currentPlayerHand.push(topCard);

            this.setState((state, currentPlayerHand, currentDeck) => ( {

        const newGame = (state) => {

                playerHand: currentPlayerHand,

                gameDeck: currentDeck

        }));

        return newGame;
      default:
        throw new Error();
    };
  },
   
        return (
            <GameContext.Provider value={{ game, dispatch }}>

                <div className="game">

                    <Table />
                    <Hand />

                    {/*<button className="square" onClick={ function() { alert('click'); } } > PLAY </button>*/}

                    <button className="square" onClick={ () => dispatch({ type: 'deal'}) } >
                      
                        DRAW
                    
                    </button>


                </div>
            
            </GameContext.Provider>

        );

}



// There’s another Hook called useReducer that is specially designed to update 
// the state based on the current state, in a manner similar to the .reduce array method. 
// The useReducer Hook is similar to useState, but when you initialize the Hook, you 
// pass in a function the Hook will run when you change the state along with the initial data. 
// The function—referred to as the reducer—takes two arguments: the state and another argument. 
// The other argument is what you will supply when you call the update function.







