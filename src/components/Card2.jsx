import React from 'react';
import PropTypes from 'prop-types';
import clubs from '../other/icons/Trefle.svg';
import spades from '../other/icons/Pique.svg';
import hearts from '../other/icons/Coeur.svg';
import diamonds from '../other/icons/Carreau.svg';
import cardback from '../other/cardback.svg';

import '../styles/Card.css';

//||||||||||||||||||||||||||||||||||||||||
let icons = new Map();

icons.set('clubs', clubs);
icons.set('spades', spades);
icons.set('hearts', hearts);
icons.set('diamonds', diamonds);

// Create Card-data Generator that provides map based on game type, card type.
//||||||||||||||||||||||||||||||||||||||||


export default class Card extends React.Component {
  // whats the fundamental difference between class and function for this use case?
  // why not use function 

  constructor(props) {
    super(props);

    let { cardKey, faceUp } = props;

    this.state = {
          faceUp: faceUp
    };

    this.front = () => {
        // TODO: improve this re: conditional styling 
        let getStyle = (cardKey) => {
            return { color: (cardKey.suit === 'spades' || cardKey.suit === 'clubs') ? 'black' : 'red' }
        }

        return (
          <div style = { getStyle(cardKey) } >
              <div className="rank"> {cardKey.rank} </div>
              <img src={icons.get(cardKey.suit)} className="suit" alt={cardKey.suit} />
          </div>
        );
    }

    this.back = <img src={cardback} className="back-image" alt='card-back' />

    this.turnOver = this.turnOver.bind(this); // find out why this is necessary again

  }

  turnOver() {
    this.setState(state => ({
      faceUp: !state.faceUp
    }));
  }

  render() {
    return (
      <div className="card" onClick={(e) => this.props.onClick(e, this.props.cardKey)}>

        {/* TODO: Introduce Cardback as an image and not its own component */}
        { (this.state.faceUp) ? this.front() : this.back }

      </div>
    );
  }

}


Card.propTypes = {
  cardKey: PropTypes.shape({
    rank: PropTypes.string,
    suit: PropTypes.string
  }).isRequired,
  faceUp: PropTypes.bool,
}

Card.defaultProps = {
  faceUp: true,
}