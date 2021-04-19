import React from 'react';
import PropTypes from 'prop-types';

import clubs from '../other/icons/Trefle.svg';
import spades from '../other/icons/Pique.svg';
import hearts from '../other/icons/Coeur.svg';
import diamonds from '../other/icons/Carreau.svg';

import CardBack from '../components/CardBack';

import '../styles/Card.css';


let icons = new Map();

icons.set('clubs', clubs);
icons.set('spades', spades);
icons.set('hearts', hearts);
icons.set('diamonds', diamonds);


class Card extends React.Component {

  constructor(props) {
    super(props);
    // console.log(icons.get(props.suit)); ///black WHY???

    this.front = () => {
        function getStyle(props) {
            return { color: (props.suit === 'spades' || props.suit === 'clubs') ? 'black' : 'red' }
        }

        return (
          <div style = { getStyle(props) } className="card-face">
              <div className="rank"> {props.rank} </div>
              <img src={icons.get(props.suit)} className="suit" alt={props.suit} />
          </div>
        );
    }

    this.state = { faceUp: true };

    this.turnOver = this.turnOver.bind(this);

  }

  turnOver() {
    this.setState(state => ({
      faceUp: !state.faceUp
    }));
  }

  render() {
    return (
      <div className="card" onClick={this.turnOver} >

        { (this.state.faceUp) ? this.front() : <CardBack /> }

      </div>
    );
  }

}


Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default Card;