import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import CardBack from '../components/CardBack';

// import GameContext from '../game/Game4';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    hand: {
        // display: 'flex',
        // background: '#4B7C5F',
        // alignSelf: 'stretch',
        // flexGrow: '1',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
    },

    // deck: {
    //     position: 'relative',
    //     right: '10%',
    // }

});


const Table = (props) => {
  // Declare a new state variable, which we'll call "count" 

    // const game = useContext(GameContext);

    const classes = useStyles();

    return (
        <div className={classes.hand}>

            { game.playerHand.map( 

                (card) => <Card rank={card.rank} suit={card.suit} /> )

            }
            
        </div>

    );

}


export default Table;