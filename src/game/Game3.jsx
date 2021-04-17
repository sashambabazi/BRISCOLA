import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import CardBack from '../components/CardBack';
import PlayerHand from '../components/PlayerHand';


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


class Game extends React.Component {

    constructor(props) {
        super(props);
        // https://reactjs.org/docs/react-without-es6.html

        this.state = {
            gameDeck: deck,
            playedPile: [],
            playerHand: [],

        };


        this.shuffleDeck = this.shuffleDeck.bind(this);
        this.dealCard = this.dealCard.bind(this);

        this.shuffleDeck();
        // console.log(this.gameDeck);
        this.playerCards = this.state.playerHand.map( (card) =>
            
            <Card rank={card.rank} suit={card.suit} />  //add id or key

        );

    }

    shuffleDeck() {
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


    // dealCard() {  ERROR: Too many setstate calls. Limited by React to prevent infinite loops 
    //     let currentDeck = this.state.gameDeck;
    //     let topCard = currentDeck.pop();
    //     this.setState((state) => ({ gameDeck: currentDeck }));
    //     let currentPlayerHand = this.state.playerHand;
    //     currentPlayerHand.push(topCard);
    //     this.setState((state) => ({ playerHand: currentPlayerHand }));
    //     console.log(this.playerHand);

    // }




    render() {
        return (
            <div className="game">

                <div className="table">

                    {/*<PlayedPile />*/}

                    {/***** Deck is just a cardback used for animation purposes,
                      all that info can be handled within game*/}

                    <div className="deck">
                        {(this.state.gameDeck.length > 0)
                            ? ( <div className="card"> <CardBack /> </div> )
                            : (<div className="empty-deck" /> )
                        }
                      
                    </div>
                    
                </div>

                <div className='player-hand'>
                    { store.playerHand.map(
                      (card) => <Card rank={card.rank} suit={card.suit} />
                    ) }
                </div>

{/*                <button className="square" onClick={ function() { alert('click'); } } >

                    PLAY
                
                </button>*/}

                <button className="square" onClick={this.dealCard()} >
                  
                    DRAW
                
                </button>


            </div>

        );
    }

}

export default Game;