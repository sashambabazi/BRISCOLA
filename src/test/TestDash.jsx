
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { useCardGame } from '../stores/CardGameStore';

import '../styles/TestDash.css';

const TestDash = observer(() => {

    const game = useCardGame();

    let { playerHand } = game;

    
    return (

        <div className='testdash' >
            <div className='gamedata' >
                <span>  playedHand = { toJS(playerHand) } </span>
{/*                <span>  playingFirst = '{ toJS(playingFirst) }'  </span>
                <span>  roundWinner = '{ toJS(roundWinner) }' </span>
                <span>  brisc = '{ toJS(brisc) }' </span>*/}
            </div>

{/*            <div className='playerdata' >
                <span> playerWon = '{ toJS(playerWon) }'  </span>
                <span> playerHand = '{ toJS(playerHand) }' </span>
            </div>

            <div className='compdata' >
                <span>  compWon = '{ toJS(compWon) }' </span>
                <span>  compHand = '{ toJS(compHand) }' </span>
            </div>
          
        */}
        </div>

    );

})

export default TestDash;
