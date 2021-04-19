import React from 'react';
import ReactDOM from 'react-dom';
import Card2 from '../components/Card2';
import CardBack from '../components/CardBack';
// import Table from '../components/Table';
// import Hand from '../components/Hand';
// import GameContext from '../game/Game4';

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

let shuffle = (deck) => {
// Fisher-Yates Algorithm modern version (from the book The Art of Computer Programming by Donald E. Knuth)
    let shuffled = deck;

    for(var i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }

    return shuffled;
}



export default class Game extends React.Component {

    state = {
        gameDeck: shuffle(deck),
        playedPile: [],
        playerHand: [],
    };


    shuffleDeck = () => {
    // Fisher-Yates Algorithm modern version (from the book The Art of Computer Programming by Donald E. Knuth)
        let currentDeck = this.state.gameDeck;

        this.setState( (state) => ({ gameDeck: shuffle(currentDeck) }) );
    }


    dealCard = () => {

        let currentDeck = this.state.gameDeck;

        let topCard = currentDeck.pop();

        let currentPlayerHand = this.state.playerHand;

        currentPlayerHand.push(topCard);

        this.setState( {

            playerHand: currentPlayerHand,

            gameDeck: currentDeck

        })
        
        console.log(this.state.gameDeck.length);

    }

    playCard = (played) => {

        let currentPlayerHand = this.state.playerHand;

        let newPlayerHand = currentPlayerHand.filter(card => card != played);

        let currentPlayedPile = this.state.playedPile;

        currentPlayedPile.push(played);

        this.setState( {

            playerHand: newPlayerHand,

            playedPile: currentPlayedPile

        } )
        
        console.log(this.state.playedPile);

    }

    cardClick = (event, cardKey) => {

        let clickedCard = event.target;

        console.log(clickedCard);

        (clickedCard.classList.contains("selected"))
            ? this.playCard(cardKey)
            : clickedCard.classList.toggle("selected");
    }




    render() {

        return (
                <div className="game">

                    {/* <Table /> */}

                    <div className={'table'}>


                        <div className={'played'}>

                            { this.state.playedPile.slice(-2).map( (card) => ( 

                                <Card2 cardKey={card} key={card} /> 

                            ) ) }

                        </div>

                        {/***** Deck is just a cardback used for animation purposes, all that info can be handled within game */}

                        <div className={'deck'}>
                            {(this.state.gameDeck.length > 0)
                                ? ( <div className="card"> <CardBack /> </div> )
                                : ( <div className="empty-deck" /> )
                            }
                          
                        </div>
                        
                    </div>

                    {/* <Hand /> */}

                    <div className={'hand'}>

                        { this.state.playerHand.map( (card) => ( 

                            <Card2 cardKey={card} key={card} onClick={this.cardClick} /> 

                        ) ) }

                    </div>

                    <button onClick={ () => this.dealCard() } > DEAL </button>
                    <button onClick={ () => this.shuffleDeck() } > SHUFFLE </button>


                </div>

        );
    }

}
