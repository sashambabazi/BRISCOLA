import React from 'react';
import PropTypes from 'prop-types';
import clubs from '../other/icons/clubs.svg';

// import '../styles/PlayedPile.css';


// let icons = new Map();

// icons.set('CC', clubs);


function PlayedPile(props) {

  // const { suit, rank, ...other } = props;

  // function getStyle() {
  //     return {
  //     // color: icons.get(suit).getAttribute("fill")
  //     color: (suit == 'SS' || suit == 'CC') ? 'black' : 'red'
  //   }
  // }




  return (

    <div className="stock">

      <div 
        style = { getStyle() }
        className="symbols"
      >
        <div className="suit">{rank}</div>
        <img src={icons.get(suit)} className="suit" />

      </div>

    </div>

  );
}

// PlayedPile.propTypes = {
//   suit: PropTypes.string.isRequired,
//   rank: PropTypes.string.isRequired,
// };

export default PlayedPile;