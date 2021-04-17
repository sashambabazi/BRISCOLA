import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import CardBack from '../components/CardBack';
import Table from '../components/Table';
import Hand from '../components/Hand';
import GameContext from '../game/Game4';

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

// const game = {
//     gameDeck: deck,
//     playedPile: [],
//     playerHand: [],
// }

export default class Game extends React.Component {

    state = {
        gameDeck: deck,
        playedPile: [],
        playerHand: [],

    };


        // this.shuffleDeck = this.shuffleDeck.bind(this);
        // this.dealCard = this.dealCard.bind(this);

        // this.shuffleDeck();
        // console.log(this.gameDeck);

    shuffleDeck = () => {
    // Fisher-Yates Algorithm modern version (from the book The Art of Computer Programming by Donald E. Knuth)
        let shuffled = this.state.gameDeck;

        for(var i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = shuffled[i]
            shuffled[i] = shuffled[j]
            shuffled[j] = temp
        }

        this.setState((state) => ({ gameDeck: shuffled }));
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
        
        console.log(this.state.playedPile.length);

    }




    render() {

        return (
                <div className="game">

                    {/*<Table />*/}

                    <div className={'table'}>

                        {/*<PlayedPile />*/}

                        {/***** Deck is just a cardback used for animation purposes,
                          all that info can be handled within game*/}

                        <div className={'deck'}>
                            {(this.state.gameDeck.length > 0)
                                ? ( <div className="card"> <CardBack /> </div> )
                                : ( <div className="empty-deck" /> )
                            }
                          
                        </div>
                        
                    </div>

                    {/*<Hand />*/}
                    <ul className={'hand'}>

                        { this.state.playerHand.map( (card) => ( 

                                <li onClick={ () => this.playCard(card)} >

                                    <Card rank={card.rank} suit={card.suit} /> 

                                </li>
                            
                        ) ) }
                        
                    </ul>

                    {/*<button className="square" onClick={ function() { alert('click'); } } >

                            PLAY </button>*/}

                    <button onClick={ () => this.dealCard() } > DEAL </button>
                    <button onClick={ () => this.shuffleDeck() } > SHUFFLE </button>


                </div>

        );
    }

}
