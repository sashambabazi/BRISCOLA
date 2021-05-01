import React from 'react';
import { observer } from 'mobx-react';

import briscolaBanner from '../other/briscolaBanner.svg';

import '../styles/Menu.css';

const Menu = observer(() => {

    return (

        <div className='menu' >

			<div className="title"> <img src={briscolaBanner} alt='Briscola' /> </div>

			<button className="button restart" onClick={ null }>
				RESTART
			</button>

			<button className="button exit" onClick={ null }>
				EXIT
			</button>
          
        </div>

    );

})

export default Menu;


			