import React from 'react';
import { makeAutoObservable } from 'mobx';
import {createContext, useContext} from "react"

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

for (const suit of suits) {
    for (const rank of ranks) {
        let color = (suit === 'spades' || suit === 'clubs') ? 'black' : 'red'
        const card = { id: rank+suit, rank: rank, suit: suit, color: color } // theres a better way to write this
        deck.push(card);
    }
}
// Create Card-data Generator that provides map based on game type, card type.
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


let shuffle = (deck) => {
// Fisher-Yates Algorithm modern version (from the book The Art of Computer Programming by Donald E. Knuth)
    let shuffled = deck;

    for(var i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }

    return shuffled;
}


export default class CardGame {
    
    gameDeck = shuffle(deck)
    playedPile = []
    compHand = []
    playerHand = []
    compWon = []
    playerWon = []
    brisc = {}


    constructor() {
        makeAutoObservable(this)
        this.startGame()

    }

    dealCard(){
        var topCard = this.gameDeck.pop()
        return topCard
    }

    playCard(played) {
        var newPlayerHand = this.playerHand.filter(card => card !== played)
        this.playerHand = newPlayerHand
        this.playedPile.push(played)
    }

    startGame() {
        for (let i = 0; i < 2; i++) {
            this.playerHand.push(this.dealCard())
            this.compHand.push(this.dealCard())
        }

        this.brisc = this.gameDeck[0]

    }
}


const CardGameContext = createContext();
 
export const CardGameProvider = ({ children }) => {

    return (

        <CardGameContext.Provider value={ new CardGame() }> {children} </CardGameContext.Provider>

    );
}; 

export const useCardGame = () => useContext(CardGameContext);









