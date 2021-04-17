import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import CardBack from '../components/CardBack';
import PlayerHand from '../components/PlayerHand';

import GameContext from '../game/Game4';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    table: {
        display: 'flex',
        background: '#4B7C5F',
        alignSelf: 'stretch',
        flexGrow: '1',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    deck: {
        position: 'relative',
        right: '10%',
    }

});


const Table = (props) => {
  // Declare a new state variable, which we'll call "count" 

    const game = useContext(GameContext);

    const classes = useStyles();

    return (
        <div className={classes.table}>

            {/*<PlayedPile />*/}

            {/***** Deck is just a cardback used for animation purposes,
              all that info can be handled within game*/}

            <div className={classes.deck}>
                {(game.gameDeck.length > 0)
                    ? ( <div className="card"> <CardBack /> </div> )
                    : ( <div className="empty-deck" /> )
                }
              
            </div>
            
        </div>

    );

}


export default Table;