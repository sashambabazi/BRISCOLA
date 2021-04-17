import React, { useState } from 'react';

import { createContext } from 'react';

// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//   wrapper: {
//     borderBottom: 'black solid 1px',
//     padding: [15, 10],
//     textAlign: 'right',
//   }
// });

import '../styles/Game.css';

const GameContext = createContext();
export default GameContext;

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
