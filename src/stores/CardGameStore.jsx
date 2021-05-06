import React from 'react';
import { makeAutoObservable } from 'mobx';
import { toJS } from 'mobx';
import { createContext, useContext } from "react"

import clubs from '../other/icons/Trefle.svg';
import spades from '../other/icons/Pique.svg';
import hearts from '../other/icons/Coeur.svg';
import diamonds from '../other/icons/Carreau.svg';

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export let icons = new Map();

icons.set('clubs', clubs);
icons.set('spades', spades);
icons.set('hearts', hearts);
icons.set('diamonds', diamonds);


let suits = ['clubs', 'spades', 'hearts', 'diamonds'];
let ranks = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];

let deck = [];

for (let suit of suits) {

    for (let rank of ranks) {

        let color = (suit === 'spades' || suit === 'clubs') ? 'black' : 'red'

        let card = { 
            id: rank+suit, 
            rank: rank, 
            suit: suit, 
            color: color
        } 

        deck.push(card);

    }
}


// Create Card-data Generator that provides map based on game type, card type.
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const shuffle = (deck) => {
// Fisher-Yates Algorithm modern version (from the book The Art of Computer Programming by Donald E. Knuth)
    let shuffled = deck;

    for(let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }

    return shuffled;
}

const shuffledDeck = shuffle(deck);

export default class CardGame {

    gameDeck = [];
    brisc = {};

    playedPile = [];
    playerOrder = [];
    playingFirst = '';
    allPlayersPlayed = undefined;

    compHand = [];
    compWon = [];

    playerHand = [];
    playerWon = [];

    user
    comp

    constructor() {

        makeAutoObservable(this);

        this.gameDeck = shuffledDeck;

        // this.user = {
        //     hand: this.user.hand,
        //     strategy: this.userChoice,

        // }

        this.comp = {
            name: 'comp',
            hand: [],
            strategy: this.compStrategy,
            chosen: false,
        }

        this.user = {
            name: 'user',
            hand: [],
            strategy: this.userStrategy,
            chosen: false,
        }

        // this.round = {
        //     allPlayersPlayed: false,
        // }

        // this.playingFirst = (Math.random() > .5) ? 'player' : 'comp';
        // this.playerOrder = [this.user, this.comp];

        this.playingFirst = 'player';


        /////////////////////// DEBUGGING ///////////////////////

        console.log(' Top of the deck...');
        console.log(toJS(this.gameDeck[(this.gameDeck.length - 1)]));
        console.log(toJS(this.gameDeck[(this.gameDeck.length - 2)]));
        console.log(toJS(this.gameDeck[(this.gameDeck.length - 3)]));
        console.log(toJS(this.gameDeck[(this.gameDeck.length - 4)]));

        console.log(`${toJS(this.playingFirst)} is playing first...`);

        /////////////////////// DEBUGGING ////////////////////////


        this.dealCards( 2 );

        // TODO: make a chooseBrisc function that chooses the brisc and moves it to beginning of deck
        this.brisc = this.gameDeck[0];

        this.allPlayersPlayed = false;

        this.playedPile = [];

        this.runGame()

    }

    getPlayerOrder() {

        let playerOrder = [this.user, this.comp];

        if (this.playingFirst === 'comp') playerOrder.reverse();

        return playerOrder;
    }


    dealCards( n_cards ) {

        for (let i = 0; i < n_cards; i++) {

            for (let player of this.getPlayerOrder()) {

                // console.log('deck before pop topCard...');
                // console.log(toJS(this.gameDeck[(this.gameDeck.length - 1)]));

                let topCard = this.gameDeck.pop();

                // console.log(toJS(this.playerOrder));

                player.hand.push( topCard );

                // console.log(toJS( player ));
                // console.log(toJS(player.hand));

            }
        }

        console.log(`hands after getting 2 cards...`);

        console.log(toJS([this.comp.hand]));
        console.log(toJS(this.user.hand));

    }

    async userStrategy(card) {

        // this.playedPile.push( chosen );

        console.log((`${toJS(this.name)} strategy function has run...`));

        return await card;

    }

    
    async compStrategy() {
        let choice =  this.hand[ Math.floor(Math.random() * 2) ];

        // this.playedPile.push( choice );

        console.log((`${toJS(this.name)} has chosen...`));

        return await choice;

    }

    ///
        // awardPile(roundWinner) {

        //     let won = this.playedPile
        //     this.playedPile.length = 0;

        //     (roundWinner === 'comp') ? 
        //         this.compWon.push(won) : this.playerWon.push(won)
        
        // }

        // decideRoundWinner() {

        //     let player1 = this.playedFirst;

        //     let player2 = (player1 === 'comp') ? 'player' : 'comp';

        //     let [ p1Card, p2Card ] = this.playedPile;

        //     function checkBrisc (card) { return card.suit == this.brisc.suit; }

        //     let winner = () => {

        //         if (p2Card.suit === p1Card.suit) {
                    
        //             return (p1Card.rank < p2Card.rank) ? player2 : player1;
                
        //         }

        //         if (this.playedPile.some(checkBrisc)) {
                    
        //             return (this.playedPile.findIndex(checkBrisc) === 1) ? player2 : player1;

        //         }

        //         return player1;

        //     }

        //     this.roundWinner = winner;

        //     console.log('after round...');

        //     this.logState();

        // }

    async playersPlayed() {


        for (let player of this.getPlayerOrder()) {

            if (player.chosen) {

                let choice = player.strategy();

                let newHand = player.hand.filter(card => card !== choice);
                player.hand = newHand;

                this.playedPile.push( choice );

                continue;

            }

            // await setPlayerChoice()
            await player.strategy();

            player.chosen = true;
            
        }

        // this.allPlayersPlayed = true;

        return true;



    }


    runRound() {

        if ( this.playersPlayed() ) {

            // this.decideRoundWinner();

            return null;

        }

    }

    runGame() {

        if (this.gameDeck.length) {

            this.runRound()

        } 
            
    }

}


const CardGameContext = createContext();
 
export const CardGameProvider = ({ game, children }) => {

    return (

        <CardGameContext.Provider value={game}> 

            {children} 

        </CardGameContext.Provider>

    );


}; 

export const useCardGame = () => useContext(CardGameContext);









