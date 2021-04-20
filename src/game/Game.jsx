import React from 'react';

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

        const card = { rank: rank, suit: suit, id: rank + suit } // theres a better way to write this

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
        this.setState( (state) => (
            { gameDeck: shuffle(this.state.gameDeck) }
        ) );
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

        let newPlayerHand = currentPlayerHand.filter(card => card !== played);

        let currentPlayedPile = this.state.playedPile;

        currentPlayedPile.push(played);

        this.setState( {

            playerHand: newPlayerHand,

            playedPile: currentPlayedPile

        } )
        
        console.log(this.state.playedPile);

    }

    cardClick = (event, cardData) => {

        let clickedCard = event.target;

        console.log(clickedCard);

        (clickedCard.classList.contains("selected"))
            ? this.playCard(cardData)
            : clickedCard.classList.add("selected");  //add line that removes selected from others
    }


// Warning: Encountered two children with the same key, `[object Object]`. 
// Keys should be unique so that components maintain their identity across updates. 
// Non-unique keys may cause children to be duplicated and/or omitted — the behavior 
// is unsupported and could change in a future version.

    render() {

        return (
                <div className="game">

                    {/* <Table /> */}

                    <div className={'table'}>


                        <ul className={'played'}> 

                        {/*Need to remove default ul styling (probably)*/}

                            { this.state.playedPile.slice(-2).map( (card) => ( 

                                <Card2 cardData={card} key={card.id} onClick={''}/> 

                            ) ) }

                        </ul>

                        {/***** Deck is just a cardback used for animation purposes, all that info can be handled within game */}

                        <div className={'deck'} onClick={ () => this.dealCard() } >

                            {(this.state.gameDeck.length > 0)
                                ? ( <div className="card"> <CardBack /> </div> )
                                : ( <div className="empty-deck" /> )
                            }
                          
                        </div>
                        
                    </div>

                    {/* <Hand /> */}

                    <ul className={'hand'}>

                        { this.state.playerHand.map( (card) => ( 

                            <Card2 cardData={card} key={card.id} onClick={this.cardClick} /> 

                        ) ) }

                    </ul>

                    {/*<button onClick={ () => this.dealCard() } > DEAL </button>*/}

                    CLICK DECK TO DEAL

                    {/*<button onClick={ () => this.shuffleDeck() } > SHUFFLE </button>*/}


                </div>

        );
    }

}
